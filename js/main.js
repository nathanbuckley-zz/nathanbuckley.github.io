
// Scrolling
var gallery = document.getElementById("galNavbtn");
var projects = document.getElementById("projNavbtn");
var contact = document.getElementById("contNavbtn");

gallery.onclick = function(){
    var galdiv = document.getElementById("gal");
    var galdivposition = galdiv.offsetTop;
    window.scrollTo({
        top: galdivposition,
        behavior: "smooth"
    });
}

projects.onclick = function(){
    var projdiv = document.getElementById("proj");
    var projdivposition = projdiv.offsetTop;
    window.scrollTo({
        top: projdivposition,
        behavior: "smooth"
    });
}

contact.onclick = function(){
    var contdiv = document.getElementById("cont");
    var contdivposition = contdiv.offsetTop;
    window.scrollTo({
        top: contdivposition,
        behavior: "smooth"
    });
}



//Temp Secret Modal

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".modalTrigger");
var closeButton = document.querySelector(".close-button");

function toggleModal(){
    modal.classList.toggle("show-modal");
}

function windowOnClick(event){
    if (event.target === modal){
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
