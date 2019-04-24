"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Jacob Gordon
   Date:    04/23/19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
window.addEventListener("load", function () {
      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox", "Inbox", "groupBox", "mailBox", "phoneBox", "banquetBox").onblur = calcCart;
      document.getElementById("sessionBox").onchange = calcCartl;
      document.getElementById("mediaCB").onchange = calcCart;

});

function sessionTest() {
      if (sessionBox === -1) {
            sessionBox.setCustomValidity("Select a session package")
      } else {
            sessionBox.setCustomValidity("")
      }
}

function calcCart() {
      var confName = "First name Last name"
}