"use strict";

window.addEventListener("load", initialize);

// Globale variabelen
let inpUser, arrErrandList, divFeedback;

function initialize() {
    const btnArrayResult = document.querySelector("#array-result");
    inpUser = document.querySelector("#input");
    divFeedback = document.querySelector("#feedback");

    arrErrandList = [];

    btnArrayResult.addEventListener("click",addToErrands);

}
function addToErrands() {
    let userInput = inpUser.value;

    arrErrandList[arrErrandList.length] = userInput;

    displayErrandList();
}
