
const Storage = () => {
    const AllItems = JSON.parse(sessionStorage.getItem("pizza_storage")); /// saving json data from storage to an array
    return AllItems;
}

export const AddNewItem = (Item) => {
    
    var CurrentStorage = sessionStorage.getItem('pizza_storage'); // saving session storage to ,,CurrentStorage" variable to keep code clean and understandable :)

    if (!CurrentStorage) { // check if an item is already registered
        CurrentStorage = []; // if not, we initiate an empty array of pizza
    }
    else {
        CurrentStorage = JSON.parse(CurrentStorage); // data inheritance
    }

    CurrentStorage.push({// add the newly created pizza to session storage
        id: Math.random(),
        name: Item.name,
        price: Item.price,
        heat: Item.heat,
        toppings: Item.selectedToppings.join(', '),
        photoUrl: Item.photoUrl
    }); 

    sessionStorage.setItem('pizza_storage', JSON.stringify(CurrentStorage));

}

export const RemoveItem = (ItemId, update) => {
    alert("do you really want to delete this pizza?");
    var SessionArray = Storage();
    var newArray = SessionArray.filter(element => element.id !== ItemId);
    sessionStorage.setItem('pizza_storage', JSON.stringify(newArray));
    update(); // updates list after deleting item
}

export default Storage;