document.getElementById("book-form").onsubmit = () => {

    let isValid = true;

    //vaidate destination
    let destination = document.getElementById("destination").ariaValueMax;
    if(value == "none") {
        document.getElementById('err-destination').style.display = "block";
        isValid = false;
    }
    

    return isValid;

}

function clearErrors() {
    let errors = document.getElementsByName("err");
    for (let i = 0; i < errors.length; i++){
        errors[i].style.display ="none";
    }
}