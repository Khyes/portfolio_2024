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
        $('canvas, .scroll-wrapper').fadeOut();
    } else {
        $('canvas, .scroll-wrapper').fadeIn();
    }
});


