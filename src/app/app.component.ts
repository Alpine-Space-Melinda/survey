import { Component, OnInit } from '@angular/core';
import { Model, SurveyNG, StylesManager, Survey, IQuestion, surveyLocalization, OtherEmptyError } from 'survey-angular';
import { SurveySpecificationService } from "src/app/survey/survey-specification.service";
import { ResponseConverterService } from "src/app/survey/response-converter.service";
import { LimesurveyAnswerCode } from "./survey/limesurvey-questions-mapping";
import { LimesurveyResponseBuilder } from "./limesurvey/limesurvey-response-builder";
import { LimesurveyClientFactoryService, LimesurveyClientCredentials } from "src/app/limesurvey/limesurvey-client-factory.service";
import { ScoreCalculatorService } from "./score/score-calculator.service";
import { isDevMode } from '@angular/core';
import * as URI from 'urijs';

import { environment } from '../environments/environment';
import { LimesurveyMappingProviderService } from './survey/limesurvey-mapping-provider.service';
import { TranslateService } from '@ngx-translate/core';
import { LimesurveyClient } from './limesurvey/limesurvey-client';

import { slovenianSurveyStrings } from './i18n/surveyjs/slovenian';
import { austrianGermanSurveyStrings } from './i18n/surveyjs/austrian-german';
import { swissGermanSurveyStrings } from './i18n/surveyjs/swiss-german';
import { Title } from '@angular/platform-browser';
import * as showdown from 'showdown';

import Velocity from 'velocity-animate';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
} )
export class AppComponent implements OnInit {
    
    public source = null;
    protected channel = null;
    
    public SurveyStatus = SurveyStatus;
    public status: SurveyStatus = SurveyStatus.LOADING;
    public surveyError = false;
    
    public score = null;
	public scoreValid = false;

	private pilotSelectionQuestion = "QF1";
	
	public ignoreResponse = false;
	
	protected limesurveyCredentials = null;
    
    constructor(public translate: TranslateService, public surveySpecification: SurveySpecificationService, public responseConverter: ResponseConverterService, public limesurveyClientFactory: LimesurveyClientFactoryService, public limesurveyMappingProviderService: LimesurveyMappingProviderService, public scoreCalculator: ScoreCalculatorService, protected titleService: Title){
        translate.setDefaultLang('en');
        
        this.source = this.parseSource();
        if (!this.source){
            console.error("No source detected, halting all");
            this.status = SurveyStatus.ERROR;
        }
        else console.log("Source detected", this.source);
        
        this.channel = this.parseChannel();
        console.log("Channel detected", this.channel);
		
		// Set locale
		let locale = 'en';
		switch (this.source){
			case 'de':
				locale = 'de';
				break;
			case 'at':
				locale = 'de-at';
				break;
			case 'ch':
				locale = 'de-ch';
				break;
			case 'it':
				locale = 'it';
				break;
			case 'fr':
				locale = 'fr';
				break;
			case 'si':
				locale = 'sl';
				break;
		}
		this.translate.use(locale);
		
		// Page title
		this.translate.get("APP.TITLE").subscribe(t => { this.titleService.setTitle(t); });
		
		// LimeSurvey credentials
		let limesurveyCredentials = new LimesurveyClientCredentials();
	    limesurveyCredentials.url = environment.limesurvey.api.url;
	    limesurveyCredentials.username = environment.limesurvey.api.username;
	    limesurveyCredentials.password = environment.limesurvey.api.password;
		this.limesurveyCredentials = limesurveyCredentials;
		
		// Add surveyjs translationss
		surveyLocalization.locales["sl"] = slovenianSurveyStrings;
		surveyLocalization.localeNames["sl"] = "slovenian";
		surveyLocalization.locales["de-at"] = austrianGermanSurveyStrings;
		surveyLocalization.localeNames["de-at"] = "austrian german";
		surveyLocalization.locales["de-ch"] = swissGermanSurveyStrings;
		surveyLocalization.localeNames["de-ch"] = "swiss german";
    }
    
    private parseSource(): string {
        // Admitted values
        let values = ['at', 'fr', 'de', 'it', 'si', 'ch'];
        
        // Parse
        let src = new URLSearchParams(window.location.search).get('src') || null;
        if (src){
            src = src.toLowerCase();
            if (values.indexOf(src) != -1){
                return src;
            }
            else {
                console.error("Source value not valid: ", src);
            }
        }
        else {
            console.error("No source defined");
        }
        
        return null;
    }
    
    private parseChannel(): string {
        // Parse
        return new URLSearchParams(window.location.search).get('channel') || null;
    }
    
    ngOnInit() {
        if (this.status != SurveyStatus.ERROR){
            // Styling
            StylesManager.applyTheme( "bootstrap" );
			
            var survey = new Model(this.surveySpecification.getLocalizedModel(this.translate.currentLang));
			survey.locale = this.translate.currentLang;
			survey.requiredText = "";
			survey.showQuestionNumbers = "off";
			survey.showPageNumbers = false;
            survey.onComplete.add((response) => {
                this.processResponse(response);
				
				// Scroll to top
                window.scrollTo(0, 0);
            });
			
			// Add margins to the progress bar
            survey.onRendered.add((e) => {
                // Progress bar style
                let progressBars = document.getElementsByClassName('survey-progress');
                for (let i = 0; i < progressBars.length; i++){
                    let bar = <HTMLElement>(progressBars.item(i));
                    bar.style.width = "100%";
                    bar.parentElement.style.paddingLeft = "1.5rem";
                    bar.parentElement.style.paddingRight = "1.5rem";
                    
                    (<HTMLElement>(bar.firstElementChild)).style.margin = "0";
					
					// Get the bar level
					let level = bar.getElementsByClassName('progress-bar').item(0);
					// Hide the page number
					level.getElementsByTagName('span').item(0).style.display = 'none';
                }
            });
			
			// Hide question QF1 for slovenian pilot
			survey.onAfterRenderQuestion.add((survey, question) => {
				if (question.question.name == 'QF1' && this.source == 'si'){
					question.htmlElement.style.display = 'none';
				}
			});
			// Fix questions style
			survey.onAfterRenderQuestion.add((survey, question) => {
				// Make titles bolder
				let titles = question.htmlElement.getElementsByClassName('text-bold');
				for (let i = 0; i < titles.length; i++){
					let h5 = <HTMLElement>(titles.item(i));
					h5.style.fontWeight = "700";
					h5.style.fontSize = "1.1rem";
				}
				
				// Fix descriptions
				let descriptions = question.htmlElement.getElementsByClassName('q-description');
				if (descriptions.length > 0){
					let description = descriptions.item(0);
					description.style.marginTop = "-1em";
					description.style.marginBottom = "1em";
					description.style.fontSize = "90%";
				}
				
				// Fix line-height of options labels
				let labels = question.htmlElement.getElementsByTagName('label');
				for (let i = 0; i < labels.length; i++){
					let label = <HTMLElement>(labels.item(i));
					label.style.lineHeight = "1.4";
				}
				
				// Add labels over question columns of PSq3
				if (question.question.name == "PSq3"){
					let matrixHeads = question.htmlElement.getElementsByTagName('thead');
					if (matrixHeads.length > 0){
						let head = <HTMLElement>(matrixHeads.item(0));
						let labels = head.getElementsByTagName('th');
						
						for (let i = 0; i < labels.length; i++){
							let label = labels.item(i);
							label.style.fontSize = '0.8rem';
							
							if (i == 0){
								label.prepend(document.createElement('br'));
								let text = document.createElement('span');
								text.innerText = "ni urejeno";
								text.style.textTransform = 'uppercase';
								text.style.fontSize = '1rem';
								label.prepend(text);
							}
							else if (i == labels.length - 1){
								label.prepend(document.createElement('br'));
								let text = document.createElement('span');
								text.innerText = "dobro urejeno";
								text.style.textTransform = 'uppercase';
								text.style.fontSize = '1rem';
								label.prepend(text);
							}
						}
					}
				}
				
				// Spacing of last 2 options of S2Q7
				if (question.question.name == "S2Q7"){
					let options = question.htmlElement.getElementsByClassName('radio');
					if (options.length > 1){
						(<HTMLElement>(options.item(options.length - 2))).className = (<HTMLElement>(options.item(options.length - 2))).className + " mt-2";
					}
				}
			});
			
			// Scrolls up on page change
            survey.onCurrentPageChanged.add((e) => {
                // Scroll to top
                window.scrollTo(0, 0);
            });
            survey.showProgressBar = "top";
			
			// Hide questions which are normally shown when the user is located out of the pilot area
			let hiddenQuestions: IQuestion[] = [];
			survey.onValueChanging.add((s, q) => {
				if (q.name == this.pilotSelectionQuestion){
					for (let question of hiddenQuestions){
						question.visible = true;
					}
				}
			});
			survey.onValueChanged.add((s, q) => {
				if (q.name == this.pilotSelectionQuestion && this.isUserOutOfPilot(q.value)){
					for (let question of s.getAllQuestions(false)){
						if (question.name != this.pilotSelectionQuestion){
							if (question.visible){
								question.visible = false;
								hiddenQuestions.push(question);
							}
						}
					}
				}
			});
			
			// Reset errors for some specific questions to avoid showing them before that the user clicks to go to the next page
			survey.onValueChanged.add((s, q) => {
				if (["PS4dot2", "PS4dot10", "PS4dot11", "PS4dot12", "PS4dot14", "PS4dot15"].indexOf(q.name) != -1){
					q.question.errors = [];
				}
			});

			// Create showdown markdown converter
			var converter = new showdown.Converter();
			survey
			    .onTextMarkdown
			    .add((survey, options) => {
			        //convert the mardown text to html
			        var str = converter.makeHtml(options.text);
			        //remove root paragraphs <p></p>
			        str = str.substring(3);
			        str = str.substring(0, str.length - 4);
			        //set html
			        options.html = str;
			    });

            // Doc: https://surveyjs.io/Examples/Library/?id=survey-customcss&platform=jQuery&theme=default
			let surveyElementId = "surveyElement";
            SurveyNG.render(surveyElementId , {
                model: survey,
                css: {
                    pageDescription: "text-justify px-4 mb-3",
                    navigationButton: "btn",
                    navigation: {
                        next: "btn-primary"
                    },
                    question: {
                        mainRoot: "sv_qstn px-4",
                        title: "mb-4 mt-2 text-bold",
						description: "q-description"
                    },
                    progress: "progress center-block mx-auto mb-4 survey-progress"
                },
            });

			// Set the source as a survey variable
			survey.setValue("source", this.source);
			
			// Preselect the country in case of slovenian pilot and hide country selection
			if (this.source == 'si'){
				survey.setValue("QF1", this.source);
				//survey.getQuestionByName("QF1").visible = false; // Cannot do this otherwise the response data are not returned... don't know why???
            }

			// Init animations
			var doAnimantion = true;
			var animationDuration = 200;
			survey
			    .onCurrentPageChanging
			    .add((sender, options) => {
			        if (!doAnimantion) 
			            return;
			        options.allowChanging = false;
			        setTimeout(function () {
			            doAnimantion = false;
			            sender.currentPage = options.newCurrentPage;
			            doAnimantion = true;
			        }, animationDuration);
	    			Velocity(document.getElementById(surveyElementId), {opacity: 0}, {duration: animationDuration});
			    });
			survey
			    .onCurrentPageChanged
			    .add(sender => {
			        Velocity(document.getElementById(surveyElementId), {opacity: 1}, {duration: animationDuration});
			    });
			survey
			    .onCompleting
			    .add((sender, options) => {
			        if (!doAnimantion) 
			            return;
			        options.allowComplete = false;
			        setTimeout(function () {
			            doAnimantion = false;
			            sender.doComplete();
			            doAnimantion = true;
			        }, animationDuration);
			        Velocity(document.getElementById(surveyElementId), {opacity: 0}, {duration: animationDuration});
			    });
			
            this.status = SurveyStatus.READY;
        }
    }
	
    private processResponse(response: any) {
        this.status = SurveyStatus.DONE;

        let responseData = response.data;
        console.log("Original response data", responseData);

		// Check if the response must be ignored due to the fact the the user is located out of the pilot
		this.ignoreResponse = this.isUserOutOfPilot(responseData[this.pilotSelectionQuestion]);
        
		if (!this.ignoreResponse){
	        // Calculate the score
	        this.score = this.scoreCalculator.calculate(responseData);
			this.scoreValid = this.scoreCalculator.areScoreResponsesComplete(responseData);
	        console.log("Score (valid?)", this.score, this.scoreValid);
			
			// Ignore added variables
			delete responseData.source;
	        
	        // Convert to Limesurvey response
	        let surveyRegion = this.source;
	        let limesurveyAnswers = this.responseConverter.toLimesurveyResponse(responseData, surveyRegion);
	        
	        // Add the score to the hidden Limesurvey response
	        let surveyId = this.limesurveyMappingProviderService.getSurveyId(surveyRegion);
	        let scoreQuestionMapping = this.limesurveyMappingProviderService.getScoreQuestionMapping(surveyRegion);
			console.log("Score question mapping", scoreQuestionMapping);
	        limesurveyAnswers.setResponse(new LimesurveyAnswerCode(surveyId, scoreQuestionMapping.gid, scoreQuestionMapping.qid), this.score);
	        
	        let limesurveyResponseData = limesurveyAnswers.toResponseData();
	        console.log("Limesurvey response data", limesurveyResponseData);
	        
	        // Build the full response information
	        let builder = new LimesurveyResponseBuilder();
	        builder.datestamp = new Date();
	        builder.startDate = new Date(); // TODO: Change this!
	        builder.startLanguage = 'it'; // TODO: Change this!
	        builder.responses = limesurveyResponseData;
	        let limesurveyResponse = builder.build();
	        
	        console.log("Full limesurvey response data", limesurveyResponse);
	        
			if (!!environment.saveResult){
		        // Create the client to communicate with Limesurvey
		        this.limesurveyClientFactory.createClient(this.limesurveyCredentials).subscribe((limesurveyClient: LimesurveyClient) => {
		            console.log("Limesurvey client", limesurveyClient);
		            
		            // Add the survey response
		            limesurveyClient.addResponse(surveyId, limesurveyResponse).subscribe((responseId: number) => {
		                console.log("Limesurvey response ID", responseId);
		            }, (error) => {
		                console.error("Cannot add response", error);
		                this.surveyError = true;
		            });
		        }, (error) => {
		            console.error("Cannot authenticate with LimeSurvey platform", error);
		            this.surveyError = true;
		        });
			}
			else {
				console.warn("Results not saved as stated by configuration options");
			}
		}
		else {
			console.warn("Ignoring response: user located out of pilot area [selectedArea, pilot]", responseData[this.pilotSelectionQuestion], this.source);
		}
    }

	public retry(){
		// Reload to retry
		window.location.reload();
	}
    
    public onPrivacyAcceptance(accepted: boolean){
        console.log('Privacy accepted', accepted);
        if (accepted){
            this.status = SurveyStatus.DOING;
        }
    }
	
	private isUserOutOfPilot(selectedArea: string): boolean {
		let out: boolean = (selectedArea != this.source);
		if (this.source == "at"){
			out = (["li", "de", "at", "ch"].indexOf(selectedArea) == -1);
		}
		
		return out;
	}
	
	public isDevMode(): boolean {
		return isDevMode() || URI(window.location.href).hasQuery("mode", "dev");
	}
	
	public devAutoMapRegion = "";
	public autoMap(){
		if (!this.devAutoMapRegion){
			this.devAutoMapRegion = null;
		}
		console.log("Building automatic mapping for pilot", this.devAutoMapRegion);
		
		let surveyId = this.limesurveyMappingProviderService.getSurveyId(this.devAutoMapRegion);
		console.log("Survey ID", surveyId);
		
		let scoreQuestionMapping = this.limesurveyMappingProviderService.getScoreQuestionMapping(this.devAutoMapRegion);
		console.log("Score question mapping", scoreQuestionMapping);
		
		let pilotSelectionQuestionMapping = {
			at: "1",
            fr: "2",
            de: "3",
            it: "4",
            fl: "5",
            si: "6",
            ch: "7"
		};
		console.log("Using default mapping for pilot selection question [question code, mapping]", this.pilotSelectionQuestion, pilotSelectionQuestionMapping);
		this.limesurveyClientFactory.createClient(this.limesurveyCredentials).subscribe((limesurveyClient: LimesurveyClient) => {
			limesurveyClient.getQuestionsIDs(surveyId).subscribe(questions => {
				let mapping = [];
				
				for (let code in questions){
					let qMapping = [code, questions[code]];
					if (code == this.pilotSelectionQuestion){
						qMapping[1].answers = pilotSelectionQuestionMapping;
					}
					mapping.push(qMapping);
				}
				
				console.log("Automapping result", JSON.stringify(mapping));
			});
		});
	}
	
}

enum SurveyStatus {
    
    LOADING = 'loading',
    ERROR = 'error',
    READY = 'ready',
    DOING = 'doing',
    DONE = 'done'
    
}

