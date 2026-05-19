// 1. Check browser memory as soon as the file loads
const currentTheme = localStorage.getItem('fusionTheme');

// 2. If they previously chose light mode, apply it immediately
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
}

// 3. Wait for the page to load, then attach the button clicker
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggleBtn');
    
    if (themeBtn) {
        // Set initial button text based on current mode
        themeBtn.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';

        // When the button is clicked:
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            // Save preference and update text
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('fusionTheme', 'light');
                themeBtn.textContent = 'Dark Mode'; 
            } else {
                localStorage.setItem('fusionTheme', 'dark');
                themeBtn.textContent = 'Light Mode'; 
            }
        });
    }
});