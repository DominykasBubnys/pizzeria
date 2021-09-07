import Storage from "./Storage.js";

const Sort = (arr) => { // sorts by name ==> default option
    if(arr) return arr.sort();
    return Storage().sort();
}


export default Sort;