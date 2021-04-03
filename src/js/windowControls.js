
var ids = document.querySelectorAll('*[id]');
var idNames = [];

function pegarID(){
    for(var i=0; i < ids.length; i++) {
        idNames.push(ids[i].id);
        //console.log("Nº ID: " + i + " Nome ID: " + idNames[i]);
    }
}

function abrirFormEntrar() {
    pegarID();

    var divID = document.getElementById(idNames[15]);

    if(divID.style.zIndex != "2"){
        divID.style.zIndex = "2";
        divID.style.transform = "scale(1)";
        divID.style.transition = "all .4s ease-in-out";
        divID.style.left = "0";
    } 
}

function fecharFormEntrar() {
    pegarID();

    var divID = document.getElementById(idNames[15]);
    
    if(divID.style.zIndex == "2"){
        divID.style.transform = "scale(0)";
        divID.style.transition = "all .4s ease-in-out";
        divID.style.zIndex = "-2";
        divID.style.left = "200vw";

        setTimeout( () => {
            divID.style.transform = "scale(0)";
            divID.style.transition = "all .1s ease-in-out";
            divID.style.zIndex = "-2";
            divID.style.left = "-200vw";
        }, 400);
    } 
}

function abrirCriarLogin() {
    pegarID();

    var divID = document.getElementById(idNames[6]);

    if(divID.style.zIndex != "2"){
        divID.style.zIndex = "2";
        divID.style.transform = "scale(1)";
        divID.style.transition = "all .4s ease-in-out";
        divID.style.left = "0";
    } 
}

function fecharCriarLogin() {
    pegarID();

    var divID = document.getElementById(idNames[6]);
    
    if(divID.style.zIndex == "2"){
        divID.style.transform = "scale(0)";
        divID.style.transition = "all .4s ease-in-out";
        divID.style.zIndex = "-2";
        divID.style.left = "200vw";

        setTimeout( () => {
            divID.style.transform = "scale(0)";
            divID.style.transition = "all .4s ease-in-out";
            divID.style.zIndex = "-2";
            divID.style.left = "-200vw";
        }, 400);
    } 
}