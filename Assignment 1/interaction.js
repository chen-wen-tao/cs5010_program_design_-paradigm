class Interaction{
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }
    
    show(){
        console.log("Prompt:", this.question);
        console.log("Response:", this.answer);
    }

    change_question(new_question){
        this.question = new_question;
    }

    change_response(new_response){
        this.answer = new_response;
    }
}

export default Interaction;