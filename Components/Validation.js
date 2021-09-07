import InvalidUIForm from "./UI/InvalidUIForm.js";
import ClearFormInputs from "./UI/ClearFormInputs.js";

const Validation = (Inputs) => {
    let valid = true;

    const InvalidHTMLTags = [];

    const nameInputValue = Inputs[0].value;
    const nameHtmlElement = Inputs[0];

    const priceInputValue = Inputs[1].value;
    const priceHtmlElement = Inputs[1];

    const toppingsInputValue = Inputs[3];
    const toppingsHtmlElement = Inputs[2];
    
    if(nameInputValue === ""){
        valid = false;
        InvalidHTMLTags.push(nameHtmlElement);
    }
    if(priceInputValue === ""){
        valid = false;
        InvalidHTMLTags.push(priceHtmlElement);
    }
    if(toppingsInputValue.length < 2){
        valid = false;
        InvalidHTMLTags.push(toppingsHtmlElement);
    }

    if(!valid)InvalidUIForm(InvalidHTMLTags);
    if(valid)
    
    return valid;
}

export default Validation;