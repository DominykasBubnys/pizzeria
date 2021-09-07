// importing Components
import {AddNewItem} from "./Components/Storage.js";
import Validation from "./Components/Validation.js";
import { UpdateUI } from "./Components/UI/UI.js";
import CreateTable from "./Components/UI/CreateTable.js";
import ClearFormInputs from "./Components/UI/ClearFormInputs.js";

// setting HTML tags to JS variables
const HTML_ELEMENTS = {
    nameTag: document.getElementById("name"),
    priceTag: document.getElementById("price"),
    heatTag: document.getElementById("heat"),
    photoTag: document.getElementById("photo"),
    toppingTag: Array.from(document.querySelectorAll("#Checkbox")),
    toppingsLabel: document.getElementById("ToppingsLabel"),
};


// submit button from html form
const submitBtn = document.getElementById("submitBtn"); 

const submitHandler = () => {

    var Inputs = { // saving all inputs from html tags to ,,Inputs" object
        name: HTML_ELEMENTS.nameTag.value,
        price: HTML_ELEMENTS.priceTag.value, 
        heat: HTML_ELEMENTS.heatTag.value,
        selectedToppings: HTML_ELEMENTS.toppingTag.filter(item => item.checked).map(item => item.value),
        photoUrl: HTML_ELEMENTS.photoTag.value
    }

    // SAVING FORM INPUTS VALIDATION TO VARIABLE
    const isValid = Validation([HTML_ELEMENTS.nameTag, HTML_ELEMENTS.priceTag, HTML_ELEMENTS.toppingsLabel, Inputs.selectedToppings]);
    
    if(isValid) // CHECKING IF FORM IS VALID
    {
        ClearFormInputs(HTML_ELEMENTS); // clears form input values if submition is successfull
        AddNewItem(Inputs); // ADDING PIZZA ITEM TO STORAGE
        UpdateUI(); // updates UI to show users newly created pizza in list;
    }
    else{
        console.log("your form is invalid :((");
    }
    
}

CreateTable(); // LOADS PIZZA LIST TO USERS

submitBtn.addEventListener("click",submitHandler);

