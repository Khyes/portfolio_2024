function toggleDarkMode() {
    const checkbox = document.getElementById('darkModeCheckbox');
    const body = document.body;

    checkbox.addEventListener('change', function() {
        var theme = checkbox.checked ? 'dark' : 'light';
        body.setAttribute('data-bs-theme', theme);
    });
}

toggleDarkMode();

