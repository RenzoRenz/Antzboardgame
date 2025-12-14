// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    }
});

// Game category hover effects
document.querySelectorAll('.game-category').forEach(category => {
    category.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
    });
    
    category.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Contact form validation (if form is added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#FF6B6B';
            isValid = false;
        } else {
            input.style.borderColor = '#87CEEB';
        }
    });
    
    return isValid;
}

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjODdDRUVCIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
        this.alt = 'Image placeholder';
    });
});

// Add fun interactive elements
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-button')) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Lightbox functionality
function openLightbox(imageSrc) {
    // Create lightbox if it doesn't exist
    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="close">&times;</span>
            <img class="lightbox-content" id="lightbox-img">
        `;
        document.body.appendChild(lightbox);
    }
    
    // Show lightbox with image
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'block';
    
    // Close lightbox when clicking close button or outside image
    lightbox.onclick = function(e) {
        if (e.target === lightbox || e.target.className === 'close') {
            lightbox.style.display = 'none';
        }
    };
}

// Community Slideshow
let currentCommunitySlide = 0;
const communitySlides = document.querySelectorAll('.community-slide');

function showCommunitySlide(n) {
    if (communitySlides.length === 0) return;
    
    communitySlides[currentCommunitySlide].classList.remove('active');
    currentCommunitySlide = (n + communitySlides.length) % communitySlides.length;
    communitySlides[currentCommunitySlide].classList.add('active');
}

function changeCommunitySlide(direction) {
    showCommunitySlide(currentCommunitySlide + direction);
}

// Auto-advance community slideshow
if (communitySlides.length > 0) {
    setInterval(() => {
        changeCommunitySlide(1);
    }, 4000);
}

// Leaderboard Slideshow
let currentLeaderboardSlide = 0;
const leaderboardSlides = document.querySelectorAll('.leaderboard-slide');

function showLeaderboardSlide(n) {
    if (leaderboardSlides.length === 0) return;
    
    leaderboardSlides[currentLeaderboardSlide].classList.remove('active');
    currentLeaderboardSlide = (n + leaderboardSlides.length) % leaderboardSlides.length;
    leaderboardSlides[currentLeaderboardSlide].classList.add('active');
}

function changeLeaderboardSlide(direction) {
    showLeaderboardSlide(currentLeaderboardSlide + direction);
}

// Auto-advance leaderboard slideshow
if (leaderboardSlides.length > 0) {
    setInterval(() => {
        changeLeaderboardSlide(1);
    }, 5000);
}

// Console welcome message
console.log('🎲 Welcome to AntzBoardgame! 🎮');
console.log('Ready to play some amazing board games in Miri, Sarawak!');

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}