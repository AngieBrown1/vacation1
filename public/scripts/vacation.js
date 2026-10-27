document.getElementById("book-form").onsubmit = () => {

    let isValid = true;

    clearErrors();

    //vaidate destination
    let destination = document.getElementById("destination").value;
    if(destination == "none") {
        document.getElementById('err-destination').style.display = "block";
        isValid = false;
    }
    
    let number = document.getElementById("travelers").value;
    if(number == 0){
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    }
    
    return isValid;

};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++){
        errors[i].style.display ="none";
    }
}