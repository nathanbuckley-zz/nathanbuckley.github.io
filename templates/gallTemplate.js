/*
*
*/

// instanciate new modal
var galtempmodal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay','button', 'escape'],
    closeLabel: "Close",
    //cssClass: ['modal'],
});

// content
galtempmodal.setContent('<h1>Gallery Template Modal</h1>');

// footer close button
galtempmodal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    galtempmodal.close();
});

var galblockimgdom = document.getElementById('galblockimg');

function opengaltempmodal() {
    galtempmodal.open();
}