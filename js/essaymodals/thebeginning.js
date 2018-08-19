/*
*
*/

// instanciate new modal
var beginningmodal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Close",
    cssClass: ['modal'],
});


// content
var content = '<h1>A Beginning that feels like the end...</h1>' +
'<img src="http://via.placeholder.com/600x300">' +
'<p>Wafer soufflé jelly-o candy canes gummi bears. Lollipop candy dessert pastry. Sugar plum chocolate bar cupcake dessert' +
'halvah marshmallow marshmallow brownie powder. Icing jelly beans sesame snaps cake. Gummies gingerbread cotton candy' +
'chocolate cake jelly cake candy. Jelly beans cookie brownie jelly beans donut lollipop.</p>';

beginningmodal.setContent(content);

beginningmodal.addFooterBtn(randomBtnChoice(), 'tingle-btn isobtn', function() {
    beginningmodal.close();
});

// Open Modal

function openbeginningmodal() {
    beginningmodal.open(); 
}