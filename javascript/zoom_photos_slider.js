
 /*    Photo zoom
 *    Variables and functions
 *    Author: Fabian Andres Soto Palacio  
 *    Date:   June 16th 2021
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */

var photoOrderArray = window.opener.photoOrder;
var photoZoomed = photoOrderArray[2];
var figFilename = "./imgs/photo_slider/IMG_0" + photoZoomed + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   var image = document.getElementsByTagName("img")[0];
   image.src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   var addFavoritesDiv = document.getElementsByTagName("p")[1];
   if (closeWindowDiv.addEventListener) {
      closeWindowDiv.addEventListener("click", closeWin, false);
      addFavoritesDiv.addEventListener("click", addImgToFavorites, false);
   } else if (closeWindowDiv.attachEvent) {
      closeWindowDiv.attachEvent("onclick", closeWin);
      addFavoritesDiv.addEventListener("onclick", addImgToFavorites);
   }
}

/* add to favorites assigment 3*/


function addImgToFavorites() {
   var position = 5; 
  
   for (var i = 0; i < window.opener.photoFavorites.length; i++) {
       
       if (window.opener.photoFavorites[i] === 0) {
           position = i;
          
           break;
       }
   }
   if (position > 4) {
       alert("Please remove one favorite image first. Only five are allowed.")
   }
   else {
       window.opener.photoFavorites[position] = photoZoomed;
       window.opener.document.getElementsByName("favorite")[i].src = figFilename;
       alert("Photo added to favorites.");
   }
}

/* function addImgToFavorites() {
   var fileName = document.getElementById("zoomedImage").src;

   restartloop:
   while (true) {
      for (var i = 1; i <= 6; i++) {
         if (window.opener.document.getElementById(favImage).src == "") {
            var favImage = "favorite" + i;
            window.opener.document.getElementById(favImage).src = fileName;
            window.opener.document.getElementById(favImage).style.display = "block";
            window.opener.document.getElementById(favImage).style.border = "2px solid rgba(255, 255, 255, 0.3)";
            window.opener.FavoritesImgsEventListeners();
            closeWin();
            break;
         }
      }
      if (i == 6) {
         if (rmBtn1pressed1 == true || rmBtn1pressed2 == true || rmBtn1pressed3 == true ||
            rmBtn1pressed4 == true || rmBtn1pressed5 == true) {
            break restartloop;
         }
         else
         window.alert("Only 5 favorite images allowed. Please delete clicking on the image you want to delete and try again.");
         closeWin();
      }
      break;
   }
} */



/* add img src value and create event listener when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", pageSetup, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", pageSetup);
}