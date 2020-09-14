import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ScoreCalculatorService {

	constructor() { }

	public areScoreResponsesComplete(responseData: any, preCovid: boolean): boolean {
		let complete: boolean;
		if (preCovid){
			complete = (!!responseData.Q2 && !!responseData.Q3);
		}
		else {
			complete = (!!responseData.Q2Covid19 && !!responseData.Q3Covid19);
		}
		
		return (
			complete &&
			(!!responseData.Q7dot1IT || !!responseData.Q7dot1AU || !!responseData.Q7dot1SL || !!responseData.Q7dot1SW || !!responseData.Q7dot1FR || !!responseData.Q7dot1GE) &&
			!!responseData.Q7dot2 &&
			!!responseData.Q7dot3
		);
	}

	public calculate(responseData: any, preCovid: boolean): number {
		let scores = {
			Q2: 0,
			Q3: 0,
			Q7_1: 0,
			Q7_2: 0,
			Q7_3: 0
		}

		// Question Q2
		let q = (preCovid)?responseData.Q2:responseData.Q2Covid19;
		if (q) {
			if (q.length == 1 && "7" in q){
				scores.Q2 = 0.5;
			}
			else if (("1" in q || "2" in q) && ("3" in q || "4" in q || "5" in q || "6" in q)) {
				scores.Q2 = 0.5;
			}
			else if ("5" in q || "6" in q) {
				scores.Q2 = 2;
			}
			else if ("3" in q || "4" in q) {
				scores.Q2 = 1;
			}
		}

		// Question Q3
		q = (preCovid)?responseData.Q3:responseData.Q3Covid19;
		if (q) {
			if (q == "3" || q == "4") {
				scores.Q3 = 4;
			}
			else if (q == "5" || q == "6") {
				scores.Q3 = 5;
			}
			if (q == "7") {
				scores.Q3 = 3;
			}
		}

		// Question Q7.1
		q = responseData.Q7dot1IT || responseData.Q7dot1AU || responseData.Q7dot1SL || responseData.Q7dot1SW || responseData.Q7dot1FR || responseData.Q7dot1GE;
		if (q == "3") {
			scores.Q7_1 = 1;
		}

		// Question Q7.2
		q = responseData.Q7dot2;
		if (q == "2") {
			scores.Q7_2 = 1;
		}

		// Question Q7.3
		q = responseData.Q7dot3;
		if (q == "2") {
			scores.Q7_3 = 1;
		}

		console.log("Answers scores", scores);

		return scores.Q2 + (scores.Q3 * 1.3) + (scores.Q7_1 * 0.5) + (scores.Q7_2 * 0.5) + (scores.Q7_3 * 0.5);
	}

}
