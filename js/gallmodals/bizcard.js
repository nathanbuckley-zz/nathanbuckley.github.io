/*
*
*/

// instanciate new modal
var bizcardmodal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Close",
    cssClass: ['modal'],
});


// content
var content = '<h1>Elite Buisness Card</h1>' +
'<img src="http://via.placeholder.com/600x400">' +
'<p>Wafer soufflé jelly-o candy canes gummi bears. Lollipop candy dessert pastry. Sugar plum chocolate bar cupcake dessert' +
'halvah marshmallow marshmallow brownie powder. Icing jelly beans sesame snaps cake. Gummies gingerbread cotton candy' +
'chocolate cake jelly cake candy. Jelly beans cookie brownie jelly beans donut lollipop.</p>' +
'<img src="http://via.placeholder.com/600x400">' +
'<p>Wafer soufflé jelly-o candy canes gummi bears. Lollipop candy dessert pastry. Sugar plum chocolate bar cupcake dessert' +
'halvah marshmallow marshmallow brownie powder. Icing jelly beans sesame snaps cake. Gummies gingerbread cotton candy' +
'chocolate cake jelly cake candy. Jelly beans cookie brownie jelly beans donut lollipop.</p>' +
'<img src="http://via.placeholder.com/600x400">';

bizcardmodal.setContent(content);

bizcardmodal.addFooterBtn(randomBtnChoice(), 'tingle-btn isobtn', function() {
    bizcardmodal.close();
});

// Open Modal

function openbizcardmodal() {
    bizcardmodal.open(); 
}