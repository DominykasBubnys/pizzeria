import Storage from "../Storage.js"
import CreateTable from "./CreateTable.js";

export const HasItems = () => {
    const PizzaList = Storage(); // storing data from session storage to array for keeping more readable code

    if(PizzaList !== null){ // if storage array has any items
        return true;
    }

    return false; // if no, so its empty and there is not necessary to print empty table
}

export const UpdateUI = () => { // executes if user adds new pizza to session storage
    const TableContainerElement = document.getElementById("table");
    TableContainerElement.innerHTML = "";
    CreateTable();
}