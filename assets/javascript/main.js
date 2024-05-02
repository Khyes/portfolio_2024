function toggleDarkMode() {
    const checkbox = document.getElementById('darkModeCheckbox');
    const body = document.body;

    checkbox.addEventListener('change', function() {
        var theme = checkbox.checked ? 'light' : 'dark';
        body.setAttribute('data-bs-theme', theme);
    });
}

toggleDarkMode();

