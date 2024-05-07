$(document).ready(function() {
    var footerOffset = $('footer').offset().top;
    var additionalOffset = 350; // Valeur de décalage supplémentaire que vous souhaitez ajouter

    var newFooterOffset = footerOffset + additionalOffset;

    console.log('Footer Offset:', footerOffset);

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + $(window).height();

        if (scrollDistance >= newFooterOffset) {
            $('canvas').fadeOut(1000);
        } else {
            $('canvas').fadeIn(1000);
        }
    });
});
