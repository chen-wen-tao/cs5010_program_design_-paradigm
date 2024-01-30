import Interaction from "./interaction.js";
import Timestamp_interaction from "./timestamp_interaction.js";
import dalle_interaction from "./dalle_interaction.js";

class PromptsManager {
    constructor(){
      this.interactions = [];
    }

    showAllInteractions() {
      for (let inter of this.interactions) {
        inter.show();
      }
    }

    recordPrompt(prompt, response) {
        const p = new Interaction(prompt, response);
        this.interactions.push(p);
    }

    record_timePrompt(prompt, response, timestamp){
        const p = new Timestamp_interaction(prompt, response, timestamp);
        this.interactions.push(p);
    }

    record_dallePrompt(prompt, response, timestamp){
      const p = new dalle_interaction(prompt, response, imageurl);
      this.interactions.push(p);
    }

    recordPrompt(number){
      this.interactions.splice(number, 1);
    }

    //you may change a existing interaction with a new one by specifiying the type and the index of the position you want to change
    change_prompt(type, number, question, response, timestamp = "", imageurl = ""){
      if (number > this.interactions.length - 1){
        console.log("undefined prompt index");
        return;
      }

      if (type === "text"){
        console.log(question);
        console.log(response);
        this.interactions[number].change_question(question);
        
        this.interactions[number].change_response(response);
      }
      if (type === "time"){
        this.interactions[number].change_question(question);
        this.interactions[number].change_response(response);
        this.interactions[number].change_timestampe(timestamp);
      }
      if (type === "image"){
        this.interactions[number].change_question(question);
        this.interactions[number].change_response(response);
        this.interactions[number].change_imageurl(imageurl);
      }
    }
}

export default PromptsManager;