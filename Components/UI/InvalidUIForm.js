const InvalidUIForm = (InputsElements) => {
    InputsElements.forEach(element => {
        element.classList.add("invalid");
    });
}

export default InvalidUIForm;