"use strict";
//mouse over  dynamically adds p and images for OER projects

var oerProjectBtn = document.getElementById("oer-projects-btn");
var oerProjectDiv = document.getElementById("oer-projects");
var cardBodyOerProjects = oerProjectDiv.getElementsByClassName("card-body");
var divProjectsHolder = document.getElementById("projects-holder");

if (oerProjectBtn.addEventListener) {
    oerProjectBtn.addEventListener("click", toggleDisplayProjects, false);
} else if (oerProjectBtn.attachEvent) {
    oerProjectBtn.attachEvent("onclick", toggleDisplayProjects);   // IE8
}

function toggleDisplayProjects() {
    oerProjectDiv.classList.toggle("card-modified");
    oerProjectDiv.classList.toggle("card");
    cardBodyOerProjects[0].classList.toggle("fadeIn");

    if (divProjectsHolder.style.display === "none") {
        divProjectsHolder.style.display = "block";
    } else{
        divProjectsHolder.style.display = "none";
    }
    
    var oerText = document.getElementById("oer-text");
    if (oerText.style.display === "none") {
        oerText.style.display = "block";
    } else{
        oerText.style.display = "none";
    }

// var coverImgOer = document.getElementById("cover-img-oer");
//     if( coverImgOer.style.display === "block") {
//         coverImgOer.style.display = "none";
//     } else {
//         coverImgOer.style.display = "block";
//     }
}


(function () {
    function start() {
        console.log("app has been initialized");
    }
    window.addEventListener("load", start);
})();