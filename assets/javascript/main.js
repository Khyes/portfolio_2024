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
        $('.hero-bg, .scroll-wrapper').fadeOut(1000);
    } else {
        $('.hero-bg, .scroll-wrapper').fadeIn(1000);
    }
});

// Configure your options
const options_f = { 
    layout: 'sameSize',
    gutterPixels: 20,
    gridItemsSelector: '.filtr-item',
};

// Adjust the CSS selector to match the container where
// you set up your image gallery
const filterizr = new Filterizr('.grid-cus', options_f);


  
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});