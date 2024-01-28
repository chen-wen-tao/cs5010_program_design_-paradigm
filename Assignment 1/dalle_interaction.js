import Interaction from "./interaction.js";

class DalleInteraction extends Interaction{
    constructor(question, answer, imageurl){
        super(question,answer);
        this.imageurl = imageurl;
    }
    
    show(){
        console.log("Prompt:", this.question);
        console.log("Response:", this.answer);
        console.log("ImageUrl:", this.imageurl)
    }

    show_type() {
        console.log("This is an image prompt")   
    }

    change_imageurl(new_imageurl){
        this.imageurl = new_imageurl;
    }
}

export default DalleInteraction;