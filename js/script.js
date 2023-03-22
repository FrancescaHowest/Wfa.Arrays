"use strict";

window.addEventListener("load", initialize);

// Globale variabelen
let inpUser, arrErrandList, divFeedback;

function initialize() {
    const btnArrayResult = document.querySelector("#array-result");
    inpUser = document.querySelector("#input");
    divFeedback = document.querySelector("#feedback");

    btnArrayResult.addEventListener("click",addToErrands);
    
    arrErrandList = ["Appel", "Peer"];
    
    displayErrandList();
}

function addToErrands() {
    let userInput = inpUser.value;

    arrErrandList[arrErrandList.length] = userInput;

    displayErrandList();
    inpUser.value = "";
}

function displayErrandList() { 
    divFeedback.textContent = "";

    for (let i = 0; i < arrErrandList.length; i++) {
        const divErrand = document.createElement("div");     

        divErrand.textContent = arrErrandList[i];
        divFeedback.appendChild(divErrand);
    }
}