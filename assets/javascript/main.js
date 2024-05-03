function toggleDarkMode() {
    const checkbox = document.getElementById('darkModeCheckbox');
    const body = document.body;

    checkbox.addEventListener('change', function() {
        var theme = checkbox.checked ? 'light' : 'dark';
        body.setAttribute('data-bs-theme', theme);
    });
}

toggleDarkMode();

$(window).scroll(function() {
    if ($(window).width() < 500 && $(this).scrollTop() > 300) {
        $('.hero-bg, .scroll-wrapper').fadeOut();
    } else {
        $('.hero-bg, .scroll-wrapper').fadeIn();
    }
});


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


