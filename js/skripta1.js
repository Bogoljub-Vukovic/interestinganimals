var login = document.getElementById("login");
var login1 = document.getElementsByClassName("login")[0];
var sign = document.getElementById("signup");
var sign1 = document.getElementsByClassName("sign")[0];

function mouseInL(){
    login.style.visibility = "visible";
}

function mouseOutL(){
    login.style.visibility = "hidden";
}

function mouseInS(){
    signup.style.visibility = "visible";
}

function mouseOutS(){
    signup.style.visibility = "hidden";
}

login1.addEventListener("mouseover", mouseInL);
login1.addEventListener("mouseout", mouseOutL);
sign1.addEventListener("mouseover", mouseInS);
sign1.addEventListener("mouseout", mouseOutS);
