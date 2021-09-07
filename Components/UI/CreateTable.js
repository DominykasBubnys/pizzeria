import Storage, {RemoveItem} from "../Storage.js"
import { HasItems, UpdateUI } from "./UI.js";
const PizzaTable = document.getElementById("table"); // getting access to our div element in html document
const TableHeader = ["Photo","Name","Heat","Price","Toppings","-"]; // setting headers for pizza items in list



const CreateTable = () => {
    const PizzaList = Storage(); // storing data from session storage to array for keeping more readable code

    if(HasItems()){ // if storage array is not empty then it prints all data

        const table = document.createElement("table");// creating ,,table" element in html document
        
        let headerRow = document.createElement("tr");// creating header row for table
        headerRow.classList.add("header-row"); // adding new css class to make it look better

        // ADDING PIZZA HEADER TO TABLE
        TableHeader.forEach(element => { 
            let header = document.createElement("th");
            let textNode = document.createTextNode(element);
            header.appendChild(textNode);
            headerRow.appendChild(header);
        });

        table.appendChild(headerRow); // appends header row for table

        // ADDING PIZZA INFORMATION TO TABLE
        PizzaList.forEach(pizza => { // goes through each pizza
            
            let DataRow = document.createElement("tr");
            DataRow.classList.add("data-row");

            let photoUrl = pizza.photoUrl;
            let PhotoTag = document.createElement("img");
            PhotoTag.classList.add("pizza-img");

            if(photoUrl.length > 2){ // if users sets out image link for pizza..
                PhotoTag.setAttribute("src",photoUrl);
            }
            else PhotoTag.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/2048px-Icon-round-Question_mark.svg.png");


            DataRow.appendChild(PhotoTag); // adds

            const data = [
                pizza.name,
                pizza.heat,
                pizza.price,
                pizza.toppings
            ];
            
            data.forEach((element, i) => {
                if(i === 1) // if its time to add heat we need to declare chilli peppers images intead heat count
                {
                    let chilliPeppersContainer = document.createElement("div"); // if there is more than 1 heats and it need to add more than 1 images so we will add them to container and then that container appends to row..
                    chilliPeppersContainer.classList.add("heat-div");
                    
                    for(let i = 0; i < element; i++){
                        let heatChilliImg = document.createElement("img");
                        heatChilliImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Chilli_pepper_4.svg/1200px-Chilli_pepper_4.svg.png");
                        heatChilliImg.classList.add("chilli-img");
                        chilliPeppersContainer.appendChild(heatChilliImg);
                    }

                    DataRow.appendChild(chilliPeppersContainer);
                    
                }
                else{
                    let header = document.createElement("th");
                    let textNode = document.createTextNode(element);
                    header.appendChild(textNode);
                    DataRow.appendChild(header);
                }
                
            });

            let deteleItemImg = document.createElement("img"); // setting img if user desides to remove item
            deteleItemImg.setAttribute("src", "https://icons.iconarchive.com/icons/hopstarter/rounded-square/256/Button-Delete-icon.png")
            deteleItemImg.classList.add("delete-img");
            
            DataRow.appendChild(deteleItemImg);

            table.appendChild(DataRow);

            deteleItemImg.addEventListener("click",RemoveItem.bind(null,pizza.id,UpdateUI)); // deletes current pizza item from session storage

        });

        PizzaTable.appendChild(table);

    }
}

export default CreateTable;