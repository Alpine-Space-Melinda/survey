import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export class LimesurveyClient {
    
    private url: string;
    
    private sessionKey: string;

    constructor(url: string, sessionKey: string, public httpClient: HttpClient){
        this.setUrl(url);
        this.setSessionKey(sessionKey);
    }
    
    public getUrl(): string {
        return this.url;
    }
    
    protected setUrl(url: string) {
        this.url = url;
    }

    public getSessionKey(): string {
        return this.sessionKey;
    }
    
    protected setSessionKey(sessionKey: string) {
        this.sessionKey = sessionKey;
    }
    
    public addResponse(surveyId: number, response: any): Observable<number> {
        return new Observable<number>((observer) => {
            // Add the response
            this.sendRequest("add_response", [surveyId, response]).subscribe((result: any) => {
                console.log("Call response", result);
                
                if (!result){
                    observer.error(new Error("Cannot add response to survey: no id assigned to response from Limesurvey"));
                }
                else {
                    observer.next(parseInt(result));
                    observer.complete();
                }
            }, (error) => {
                observer.error(error);
                console.error("Cannot add response", error);
            });
        });
    }
    
    protected sendRequest(method: string, params: Array<any>): Observable<any> {
        return new Observable<any>((observer) => {
            // Add session key to params
            let fullParams = params.slice();
            fullParams.unshift(this.getSessionKey());
            
            // Call limesurvey
            this.httpClient.post(this.url, {
                method: method,
                params: fullParams,
                id: 1
            }).subscribe((response: any) => {
                console.log("Limesurvey request response", response);
                
                if (!response){
                    observer.error(new Error("Cannot call Limesurvey method '" + method + "': no response from Limesurvey"));
                }
                else if (response.error){
                    observer.error(new Error("Cannot call Limesurvey method '" + method + "': " + response.error));
                }
                else if (!response.result){
                    observer.error(new Error("Cannot call Limesurvey method '" + method + "': no result in response"));
                }
                else if (typeof(response.result) === 'object' && 'status' in response.result){
                    observer.error(new Error("Cannot call Limesurvey method '" + method + "': " + response.result.status));
                }
                else {
                    observer.next(response.result);
                    observer.complete();
                }
            }, (error) => {
                observer.error(new Error("Cannot call Limesurvey method '" + method + "': cannot communicate with Limesurvey"));
                console.error("Limesurvey request error", error);
            });
        });
    }

	public getQuestionsIDs(surveyId: number): Observable<any> {
		return new Observable<any>((observer) => {
            // Add the response
            this.sendRequest("list_questions", [surveyId]).subscribe((result: any) => {
                console.log("Call response", result);
                
                if (!result){
                    observer.error(new Error("Cannot add response to survey: no id assigned to response from Limesurvey"));
                }
                else {
					let ids = {};
					(<any[]>result).forEach((q: any) => {
						if (!q.parent_qid || q.parent_qid == "0"){
							ids[q.title] = {
								qid: parseInt(q.qid),
								gid: parseInt(q.gid)
							};
						}
					})
					
                    observer.next(ids);
                    observer.complete();
                }
            }, (error) => {
                observer.error(error);
                console.error("Cannot get questions list", error);
            });
        });
	}
    
}
