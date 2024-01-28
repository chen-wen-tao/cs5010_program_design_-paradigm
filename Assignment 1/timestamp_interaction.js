import Interaction from "./interaction.js";

class Timestamp_interaction extends Interaction{
    constructor(question, answer, timestamp){
        super(question, answer);
        this.timestamp = timestamp;
    }
    
    show(){
        console.log("Prompt:", this.question);
        console.log("Response:", this.answer);
        console.log("Timestamp:", this.timestamp);
    }

    change_timestampe(new_timestamp){
        this.timestamp = new_timestamp;
    }
}


export default Timestamp_interaction;