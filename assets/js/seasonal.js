// Enhanced Seasonal Theme System for AntzBoardgame with Weather Effects
function initSeasonalTheme() {
    // Add seasonal CSS styles
    const seasonalCSS = `
        /* Seasonal Navigation Themes */
        .navbar.christmas {
            background: linear-gradient(135deg, #8b4a4a, #5a7a5a) !important;
            box-shadow: 0 2px 10px rgba(139, 74, 74, 0.3);
        }
        .navbar.chinese-new-year {
            background: linear-gradient(135deg, #a85a5a, #d4af37) !important;
            box-shadow: 0 2px 10px rgba(168, 90, 90, 0.3);
        }
        .navbar.halloween {
            background: linear-gradient(135deg, #cc7a33, #6b4d6b) !important;
            box-shadow: 0 2px 10px rgba(204, 122, 51, 0.3);
        }
        .navbar.valentine {
            background: linear-gradient(135deg, #cc6b8a, #d4a5b8) !important;
            box-shadow: 0 2px 10px rgba(204, 107, 138, 0.3);
        }
        
        /* Seasonal decorations */
        .seasonal-decoration {
            position: absolute;
            font-size: 18px;
            animation: float 3s ease-in-out infinite;
            z-index: 1000;
            pointer-events: none;
        }
        
        /* Weather Effects */
        .weather-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 999;
            overflow: hidden;
        }
        
        /* Snow Effect */
        .snowflake {
            position: absolute;
            color: white;
            font-size: 1em;
            animation: snowfall linear infinite;
            pointer-events: none;
        }
        
        @keyframes snowfall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        /* Firecracker Rain Effect */
        .firecracker {
            position: absolute;
            font-size: 1.2em;
            animation: firecrackerfall linear infinite;
            pointer-events: none;
        }
        
        @keyframes firecrackerfall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(180deg);
                opacity: 0;
            }
        }
        
        /* Spider Web Effect */
        .spider-web {
            position: absolute;
            font-size: 2em;
            opacity: 0.7;
            animation: webSway 4s ease-in-out infinite;
            pointer-events: none;
        }
        
        .spider {
            position: absolute;
            font-size: 1em;
            animation: spiderCrawl 6s linear infinite;
            pointer-events: none;
        }
        
        @keyframes webSway {
            0%, 100% { transform: rotate(-2deg); }
            50% { transform: rotate(2deg); }
        }
        
        @keyframes spiderCrawl {
            0% { transform: translateX(-50px) translateY(-50px); }
            25% { transform: translateX(50px) translateY(-25px); }
            50% { transform: translateX(25px) translateY(50px); }
            75% { transform: translateX(-25px) translateY(25px); }
            100% { transform: translateX(-50px) translateY(-50px); }
        }
        
        /* Heart Rain Effect */
        .heart {
            position: absolute;
            color: #ff69b4;
            font-size: 1.5em;
            animation: heartfall linear infinite;
            pointer-events: none;
        }
        
        @keyframes heartfall {
            0% {
                transform: translateY(-100vh) rotate(0deg) scale(0.5);
                opacity: 1;
            }
            50% {
                transform: translateY(50vh) rotate(180deg) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg) scale(0.5);
                opacity: 0;
            }
        }
        
        /* Mobile responsive decorations */
        @media (max-width: 768px) {
            .seasonal-decoration {
                font-size: 16px;
                right: 10px !important;
                top: 8px !important;
            }
            .seasonal-decoration:nth-child(n+3) {
                display: none;
            }
            .snowflake, .firecracker, .heart {
                font-size: 0.8em;
            }
            .spider-web {
                font-size: 1.5em;
            }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = seasonalCSS;
    document.head.appendChild(style);
    
    checkSeasonalTheme();
}

function checkSeasonalTheme() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;
    
    // Remove existing seasonal classes and effects
    navbar.classList.remove('christmas', 'chinese-new-year', 'halloween', 'valentine');
    removeWeatherEffects();
    
    // Christmas (December 1-31)
    if (month === 12) {
        navbar.classList.add('christmas');
        addSeasonalDecorations(['🎄', '🎅', '⭐', '🎁']);
        createSnowEffect();
    }
    // Chinese New Year (January 20 - February 20)
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 20)) {
        navbar.classList.add('chinese-new-year');
        addSeasonalDecorations(['🧧', '🐉', '🏮', '🎆']);
        createFirecrackerRain();
    }
    // Valentine's Day (February 10-16)
    else if (month === 2 && day >= 10 && day <= 16) {
        navbar.classList.add('valentine');
        addSeasonalDecorations(['💖', '💕', '🌹', '💝']);
        createHeartRain();
    }
    // Halloween (October 25-31)
    else if (month === 10 && day >= 25) {
        navbar.classList.add('halloween');
        addSeasonalDecorations(['🎃', '👻', '🦇', '🕷️']);
        createSpiderWebEffect();
    }
}

function addSeasonalDecorations(emojis) {
    // Remove existing decorations
    document.querySelectorAll('.seasonal-decoration').forEach(el => el.remove());
    
    // Add new decorations
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    const isMobile = window.innerWidth <= 768;
    const maxDecorations = isMobile ? 2 : 4;
    
    emojis.slice(0, maxDecorations).forEach((emoji, index) => {
        const decoration = document.createElement('span');
        decoration.className = 'seasonal-decoration';
        decoration.textContent = emoji;
        
        if (isMobile) {
            decoration.style.right = `${10 + (index * 30)}px`;
            decoration.style.top = '8px';
        } else {
            decoration.style.right = `${20 + (index * 40)}px`;
            decoration.style.top = '10px';
        }
        
        decoration.style.animationDelay = `${index * 0.5}s`;
        navbar.appendChild(decoration);
    });
}

// Weather Effects Functions
function createWeatherContainer() {
    let container = document.querySelector('.weather-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'weather-container';
        document.body.appendChild(container);
    }
    return container;
}

function removeWeatherEffects() {
    const container = document.querySelector('.weather-container');
    if (container) {
        container.remove();
    }
}

function createSnowEffect() {
    const container = createWeatherContainer();
    const snowflakes = ['❄️', '☃️', '⛄', '❄️', '❄️'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
            snowflake.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(snowflake);
            
            setTimeout(() => snowflake.remove(), 5000);
        }, i * 100);
    }
    
    // Continue creating snowflakes
    const snowInterval = setInterval(() => {
        if (!document.querySelector('.navbar.christmas')) {
            clearInterval(snowInterval);
            return;
        }
        
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(snowflake);
        
        setTimeout(() => snowflake.remove(), 5000);
    }, 300);
}

function createFirecrackerRain() {
    const container = createWeatherContainer();
    const firecrackers = ['🎆', '🎇', '🧨', '✨', '🎆'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const firecracker = document.createElement('div');
            firecracker.className = 'firecracker';
            firecracker.textContent = firecrackers[Math.floor(Math.random() * firecrackers.length)];
            firecracker.style.left = Math.random() * 100 + '%';
            firecracker.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
            firecracker.style.animationDelay = Math.random() * 1 + 's';
            container.appendChild(firecracker);
            
            setTimeout(() => firecracker.remove(), 4000);
        }, i * 150);
    }
    
    const firecrackerInterval = setInterval(() => {
        if (!document.querySelector('.navbar.chinese-new-year')) {
            clearInterval(firecrackerInterval);
            return;
        }
        
        const firecracker = document.createElement('div');
        firecracker.className = 'firecracker';
        firecracker.textContent = firecrackers[Math.floor(Math.random() * firecrackers.length)];
        firecracker.style.left = Math.random() * 100 + '%';
        firecracker.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        container.appendChild(firecracker);
        
        setTimeout(() => firecracker.remove(), 4000);
    }, 400);
}

function createHeartRain() {
    const container = createWeatherContainer();
    const hearts = ['💖', '💕', '💝', '💗', '💓'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.animationDelay = Math.random() * 1 + 's';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 200);
    }
    
    const heartInterval = setInterval(() => {
        if (!document.querySelector('.navbar.valentine')) {
            clearInterval(heartInterval);
            return;
        }
        
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }, 500);
}

function createSpiderWebEffect() {
    const container = createWeatherContainer();
    
    // Add spider webs in corners
    const webPositions = [
        { top: '10px', left: '10px' },
        { top: '10px', right: '10px' },
        { bottom: '10px', left: '10px' },
        { bottom: '10px', right: '10px' },
        { top: '30%', left: '20%' },
        { top: '60%', right: '25%' }
    ];
    
    webPositions.forEach((pos, index) => {
        setTimeout(() => {
            const web = document.createElement('div');
            web.className = 'spider-web';
            web.textContent = '🕸️';
            Object.assign(web.style, pos);
            web.style.animationDelay = index * 0.5 + 's';
            container.appendChild(web);
        }, index * 300);
    });
    
    // Add crawling spiders
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const spider = document.createElement('div');
            spider.className = 'spider';
            spider.textContent = '🕷️';
            spider.style.top = Math.random() * 80 + '%';
            spider.style.left = Math.random() * 80 + '%';
            spider.style.animationDuration = (Math.random() * 4 + 4) + 's';
            spider.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(spider);
        }, i * 400);
    }
}

// Test function to manually trigger seasonal themes
function testSeasonalTheme(season) {
    const navbar = document.querySelector('.navbar');
    if (!navbar) {
        console.log('❌ Navbar not found!');
        return;
    }
    
    // Remove existing classes and effects
    navbar.classList.remove('christmas', 'chinese-new-year', 'halloween', 'valentine');
    document.querySelectorAll('.seasonal-decoration').forEach(el => el.remove());
    removeWeatherEffects();
    
    console.log(`🧪 Testing ${season} theme with weather effects...`);
    
    switch(season) {
        case 'christmas':
            navbar.classList.add('christmas');
            addSeasonalDecorations(['🎄', '🎅', '⭐', '🎁']);
            createSnowEffect();
            break;
        case 'chinese-new-year':
            navbar.classList.add('chinese-new-year');
            addSeasonalDecorations(['🧧', '🐉', '🏮', '🎆']);
            createFirecrackerRain();
            break;
        case 'valentine':
            navbar.classList.add('valentine');
            addSeasonalDecorations(['💖', '💕', '🌹', '💝']);
            createHeartRain();
            break;
        case 'halloween':
            navbar.classList.add('halloween');
            addSeasonalDecorations(['🎃', '👻', '🦇', '🕷️']);
            createSpiderWebEffect();
            break;
        case 'reset':
            console.log('🔄 Reset to normal theme');
            return;
        default:
            console.log('❌ Invalid season. Use: christmas, chinese-new-year, valentine, halloween, or reset');
            return;
    }
    
    console.log(`✅ ${season} theme with weather effects applied!`);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSeasonalTheme);
} else {
    initSeasonalTheme();
}

// Handle window resize for mobile responsiveness
window.addEventListener('resize', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar && (navbar.classList.contains('christmas') || 
                   navbar.classList.contains('chinese-new-year') || 
                   navbar.classList.contains('valentine') || 
                   navbar.classList.contains('halloween'))) {
        checkSeasonalTheme();
    }
});

// Make test function globally available
window.testSeasonalTheme = testSeasonalTheme;