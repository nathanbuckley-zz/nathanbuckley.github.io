/*
*
*/

// instanciate new modal
var essaytempmodal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Close",
    cssClass: ['modal'],
});


// content
var content = '<h1>Essay Template Modal</h1>' +
'<img src="http://via.placeholder.com/600x400">' +
'<p>Wafer soufflé jelly-o candy canes gummi bears. Lollipop candy dessert pastry. Sugar plum chocolate bar cupcake dessert' +
'halvah marshmallow marshmallow brownie powder. Icing jelly beans sesame snaps cake. Gummies gingerbread cotton candy' +
'chocolate cake jelly cake candy. Jelly beans cookie brownie jelly beans donut lollipop.</p>' +
'<img src="http://via.placeholder.com/600x400">' +
'<p>Wafer soufflé jelly-o candy canes gummi bears. Lollipop candy dessert pastry. Sugar plum chocolate bar cupcake dessert' +
'halvah marshmallow marshmallow brownie powder. Icing jelly beans sesame snaps cake. Gummies gingerbread cotton candy' +
'chocolate cake jelly cake candy. Jelly beans cookie brownie jelly beans donut lollipop.</p>' +
'<img src="http://via.placeholder.com/600x400">';

essaytempmodal.setContent(content);

// footer close button

function randomBtnChoice(){
    var footerBtnChoices = ['Finished','Done','Complete','Terminate'];
    var rbc = footerBtnChoices[Math.floor(Math.random()*footerBtnChoices.length)];
    return rbc;
}

essaytempmodal.addFooterBtn(randomBtnChoice(), 'tingle-btn isobtn', function() {
    essaytempmodal.close();
});


// Open Modal
var essayblockimgdom = document.getElementById('essaytempbtn');

function openessaytempmodal() {
    essaytempmodal.open();   
}