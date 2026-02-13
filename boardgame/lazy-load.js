// Lazy load images for current page only
function loadImagesForCurrentPage() {
    const visibleCards = document.querySelectorAll('.game-card:not([style*="display: none"])');
    
    visibleCards.forEach(card => {
        const img = card.querySelector('img[data-src]');
        if (img && img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    });
}

// Call this function whenever pagination changes
// Add this to your existing pagination code
document.addEventListener('DOMContentLoaded', function() {
    // Initial load
    loadImagesForCurrentPage();
    
    // If you have pagination buttons, add event listeners
    const paginationButtons = document.querySelectorAll('.pagination-button, [data-page]');
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(loadImagesForCurrentPage, 100);
        });
    });
});
