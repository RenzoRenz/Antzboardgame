// Language Toggle Functionality
let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    
    // Update all elements with translation data
    const elements = document.querySelectorAll('[data-en][data-zh]');
    elements.forEach(element => {
        element.innerHTML = element.getAttribute(`data-${currentLang}`);
    });
    
    // Update language button text
    const langBtn = document.getElementById('lang-toggle');
    langBtn.textContent = currentLang === 'en' ? '中文' : 'English';
    
    // Store language preference
    localStorage.setItem('preferred-language', currentLang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }
    
    // Add event listener to language toggle button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
});