export class LimesurveyQuestionsMapping {
    
    constructor(public surveyId: number, protected mapping = new Map<string, {
        gid: number,
        qid: number,
        answers?: {}
    }>()){
    }
    
    public setMapping(questionCode: string, gid: number, qid: number, answers?: {string: string}){
        this.mapping.set(questionCode, {
            gid: gid,
            qid: qid,
            answers: answers
        });
    }
    
    public setAnswerMapping(questionCode: string, answerCode: string, mapping: string){
        let questionMapping = this.mapping.get(questionCode);
        if (!questionMapping){
            throw new Error("Question code unknown: " + questionCode);
        }
        
        if (!questionMapping.answers){
            questionMapping.answers = {};
        }
        questionMapping.answers[answerCode] = mapping;
        
        this.mapping.set(questionCode, questionMapping);
    }
    
    public mapQuestion(questionCode: string): LimesurveyAnswerCode {
        let questionMapping = this.mapping.get(questionCode);
        
		// If a mapping has not been found, tries with a localized question
		let localizedQuestionCodeRegex = /_[A-Za-z0-9]{2}_(\w+)/i;
		let localizedQuestionCodeMatch = questionCode.match(localizedQuestionCodeRegex);
		if (!questionMapping && localizedQuestionCodeMatch && localizedQuestionCodeMatch.length > 1){
			questionMapping = this.mapping.get(localizedQuestionCodeMatch[1]);
		}
		
		if (questionMapping){
            return new LimesurveyAnswerCode(this.surveyId, questionMapping.gid, questionMapping.qid);
        }
        return null;
    }
    
    public mapAnswer(questionCode: string, answerCode: string): string {
        let questionMapping = this.mapping.get(questionCode);
        if (questionMapping){
            let answers = questionMapping.answers;
            if (answers){
                return questionMapping.answers[answerCode];
            }
        }
        return null;
    }
    
}

export class LimesurveyAnswerCode {
    
    constructor(public surveyId: number, public groupId: number, public questionId: number, public answerId?: string){
    }
    
    public toCode(): string {
        let code = (this.surveyId + "X" + this.groupId + "X" + this.questionId);
        if (!!this.answerId){
            code += this.answerId;
        }
        return code;
    }

}
