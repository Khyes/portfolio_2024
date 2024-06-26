function toggleDarkMode() {
    const checkbox = document.getElementById('darkModeCheckbox');
    const body = document.body;

    // Function to set theme
    function setTheme(theme) {
        body.setAttribute('data-bs-theme', theme);
        // Store the theme preference in local storage
        localStorage.setItem('theme', theme);
    }

    // Check if theme preference exists in local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        // Apply the stored theme
        setTheme(storedTheme);
        // Update checkbox state accordingly
        checkbox.checked = storedTheme === 'light';
    }

    // Event listener for checkbox change
    checkbox.addEventListener('change', function() {
        var theme = checkbox.checked ? 'light' : 'dark';
        setTheme(theme);
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
    selector: '.grid-cus',
    gridItemsSelector: '.filtr-item',
    spinner: {
        // This is the only mandatory setting if you simply wish
        // to enable the built-in spinner
        enabled: true,
        // Further (optional) customization options.
        fillColor: '#ffffff',
        styles: {
          height: '75px',
          margin: '0 auto',
          width: '75px',
          'z-index': 2,
        },
      }
};
document.addEventListener('DOMContentLoaded', function() {

// Adjust the CSS selector to match the container where
// you set up your image gallery
const filterizr = new Filterizr('.grid-cus', options_f);
});

  
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

function copyEmail() {
    // Get the text content of the email paragraph
    const emailText = document.getElementById('email').textContent.trim();

    // Create a textarea element to use for copying
    const textarea = document.createElement('textarea');
    textarea.value = emailText;

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textarea);

    // Optionally, provide some feedback to the user
    alert('Email copied to clipboard: ' + emailText);
}

function copyTel() {
    // Get the text content of the telephone number paragraph
    const telText = document.getElementById('tel').textContent.trim();

    // Create a textarea element to use for copying
    const textarea = document.createElement('textarea');
    textarea.value = telText;

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textarea);

    // Optionally, provide some feedback to the user
    alert('Telephone number copied to clipboard: ' + telText);
}