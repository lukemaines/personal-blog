const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body; 

darkModeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙'; 
});