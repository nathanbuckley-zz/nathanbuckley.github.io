
// ******** Nav Scrolling ********
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

// ******* Scroll to top button ********

//show/Hide button once scrolling beyond Nav
window.onscroll = function(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("topbtn").style.display = "block";
    } else {
        document.getElementById("topbtn").style.display = "none";
    }
}

//Scroll to top onclick function
function scrolltotop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ******** Modal footer close button random choice generator *********

function randomBtnChoice(){
    
    var footerBtnChoices = ['Finished',
                            'Done',
                            'Complete',
                            'Terminate',
                            'Abolish',
                            'Abort',
                            'Conclude',
                            'Dismiss',
                            'Wrap up', 
                            'Flawless Victory'];

    var rbc = footerBtnChoices[Math.floor(Math.random()*footerBtnChoices.length)];
    return rbc;
}

// ******** Temp Secret Modal ********

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
