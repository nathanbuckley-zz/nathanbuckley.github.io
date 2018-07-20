/*
*
*/

// instanciate new modal
var mintcvmodal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Close",
    cssClass: ['modal'],
});


// content
var content = '<h1>Mint Charcoal CV Template (DOWNLOAD FREE)</h1>' +
'<img src="img/modal/mintcv/mintCvImgModal.png">' +
'<p>Wafer soufflé jelly-o candy canes gummi bears. Lollipop candy dessert pastry. Sugar plum chocolate bar cupcake dessert' +
'halvah marshmallow marshmallow brownie powder. Icing jelly beans sesame snaps cake. Gummies gingerbread cotton candy' +
'chocolate cake jelly cake candy. Jelly beans cookie brownie jelly beans donut lollipop.</p>' +
'<p>Wafer soufflé jelly-o candy canes gummi bears. Lollipop candy dessert pastry. Sugar plum chocolate bar cupcake dessert' +
'halvah marshmallow marshmallow brownie powder. Icing jelly beans sesame snaps cake. Gummies gingerbread cotton candy' +
'chocolate cake jelly cake candy. Jelly beans cookie brownie jelly beans donut lollipop.</p>' +
'<img src="http://via.placeholder.com/600x400">';

mintcvmodal.setContent(content);

mintcvmodal.addFooterBtn(randomBtnChoice(), 'tingle-btn isobtn', function() {
    mintcvmodal.close();
});

// Open Modal

function openmintcvmodal() {
    mintcvmodal.open();
    
}