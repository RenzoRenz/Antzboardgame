// Language switching system
let currentLanguage = localStorage.getItem('language') || 'en';

const translations = {
    en: {
        // Navigation
        home: 'Home',
        jubensha: 'Jubensha',
        boardgame: 'Boardgame',
        about: 'About Us',
        contact: 'Contact Us',
        
        // Homepage
        heroTitle: 'AntzBoardgame',
        heroSubtitle: 'Where Games Come Alive in Miri!',
        bookSession: 'Book Your Session',
        browseGames: 'Browse Games',
        boardgamesCount: 'Boardgames',
        jubenshaCount: 'Jubensha',
        ourStory: 'Our Story',
        experienceTitle: 'Experience Miri\'s Premium Tabletop Hub',
        communityDriven: 'Community Driven',
        experienceText: 'At AntzBoardgame, we believe in the power of social interaction through play. Whether you\'re a hardcore strategist, a casual player, or a fan of immersive "Jubensha" roleplay, we provide the perfect sanctuary for your gaming adventures.',
        communityText: 'Regular tournaments and community game nights.',
        footerText: 'Miri\'s Premier Gaming Hub',
        copyright: '© 2017 AntzBoardgame. All rights reserved. | Miri, Sarawak',
        
        // About page
        aboutSince: 'Since 2017',
        aboutTitle: 'Bringing People Together in Miri',
        aboutText1: 'From a shared weekend hobby in a small apartment to a community cornerstone, AntzBoardgame cafe is dedicated to creating unforgettable tabletop experiences and lasting friendships.',
        aboutText2: 'We believe that in an increasingly digital world, the physical connection across a table is more valuable than ever. Whether you\'re a hardcore strategist or just looking for a casual night out, we\'ve built a sanctuary for everyone.',
        aboutCommunityTitle: 'Our Antz Community',
        aboutCommunityText: 'Join our growing family of board game enthusiasts and create lasting friendships',
        aboutFacilitiesTitle: 'Our Space',
        aboutFacilitiesText: 'Explore our different zones, from social gaming halls to the immersive, private \'Mystery Chambers\'.',
        joinCommunity: 'Join our Community',
        community: 'Community',
        communityDesc: 'We host tournaments from time to time and mixers to ensure no one ever plays alone. Your second home in Miri.',
        funFirst: 'Fun First',
        funFirstDesc: 'With a library of over 500+ curated titles, from classics to the latest Kickstarter hits.',
        inclusivity: 'Inclusivity',
        inclusivityDesc: 'A safe, welcoming space for all ages and skill levels. Our game masters are always ready to teach.',
        
        // Contact page
        contactTitle: 'Get in Touch',
        contactText: 'Have a question about our board game collection or want to book a private Mystery Chamber? We\'re here to help you plan your next legendary game night in Miri.',
        contactLocation: 'Our Location',
        contactDirect: 'Direct Contact',
        contactFollow: 'Follow Us',
        whatsappText: 'Contact us on WhatsApp',
        
        // Boardgame page
        boardgameTitle: 'Under Construction',
        boardgameText: 'We\'re working hard to bring you our complete boardgame collection. Check back soon!',
        backHome: 'Back to Home',
        filters: 'Filters',
        refineCollection: 'Refine your collection',
        searchGames: 'Search games...',
        category: 'Category',
        strategy: 'Strategy',
        partyGames: 'Party Games',
        family: 'Family',
        cardGames: 'Card Games',
        difficulty: 'Difficulty',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        players: 'Players',
        resetFilters: 'Reset All Filters',
        
        // Jubensha page
        jubenshaSubtitle: 'Where secrets die and mysteries come alive.',
        jubenshaArt: 'The Art of the Script',
        jubenshaDesc: 'Jubensha (剧本杀) is not merely a game. It is a descent into a forgotten narrative where every whisper carries weight and every shadow hides a suspect.',
        playersEntangled: '3-8 Players Entangled',
        hoursOfSuspense: '2-4 Hours of Suspense',
        multipleStorylines: 'Multiple storylines available',
        availableLanguages: 'Available in Chinese & English',
        availableDossiers: 'Available Dossiers',
        mysteryCrime: 'Mystery & Crime',
        mysteryCrimeDesc: 'Evidence reports and witness statements await your cold analysis.',
        horrorThriller: 'Horror & Thriller',
        horrorThrillerDesc: 'Some secrets were meant to stay buried. Pray they don\'t find you.',
        historicalNoir: 'Historical Noir',
        historicalNoirDesc: 'Step into the blood-soaked pages of the past. History is written in ink.',
        darkFantasy: 'Dark Fantasy',
        darkFantasyDesc: 'Where magic is a curse and the monsters wear human faces.',
        jubenshaFacilities: 'Our Facilities',
        facilitiesDesc: 'Immerse yourself in our specially designed Jubensha rooms',
        mysteryChamber: 'Mystery Chamber',
        mysteryCapacity: 'Capacity: 4-6 Players',
        mysteryChamberDesc: 'An intimate setting perfect for classic detective mysteries and psychological thrillers. Dark wood furnishings and vintage decor create the perfect atmosphere for unraveling secrets.',
        grandHall: 'Grand Investigation Hall',
        grandCapacity: 'Capacity: 6-8 Players',
        grandHallDesc: 'A spacious room designed for larger groups and complex storylines. Features multiple seating areas and atmospheric lighting perfect for epic historical dramas and supernatural mysteries where shadows whisper secrets and every corner holds dread.',
        jubenshaLegends: 'Legends in the Making',
        legendsDesc: 'Witness the tales of those who dared to uncover the truth',
        signDestiny: 'Sign Your Destiny',
        destinyDesc: 'The script is written. Your seat at the table is cold. Will you answer the call?',
        jubenshaBook: 'Book Now',
        curatorsText: 'Curators of fine mystery and darkness in Miri.',
        truthText: '© 2017 AntzBoardgame. The truth is out there.',
        mysteriesText: '© 2025 AntzJubensha. Where secrets die and mysteries come alive.'
    },
    zh: {
        // Navigation
        home: '首页',
        jubensha: '剧本杀',
        boardgame: '桌游',
        about: '关于我们',
        contact: '联系我们',
        
        // Homepage
        heroTitle: 'Antz桌游',
        heroSubtitle: '美里游戏天堂！',
        bookSession: '预约游戏',
        browseGames: '浏览游戏',
        boardgamesCount: '桌游',
        jubenshaCount: '剧本杀',
        ourStory: '我们的故事',
        experienceTitle: '体验美里顶级桌游中心',
        communityDriven: '社区驱动',
        experienceText: '在Antz桌游，我们相信游戏中社交互动的力量。无论您是硬核策略玩家、休闲玩家，还是沉浸式“剧本杀”角色扮演的粉丝，我们都为您的游戏冒险提供完美的避风港。',
        communityText: '定期举办锦标赛和社区游戏之夜。',
        footerText: '美里顶级游戏中心',
        copyright: '© 2017 Antz桌游。保留所有权利。| 美里，砂拉越',
        
        // About page
        aboutSince: '自2017年',
        aboutTitle: '在美里聚集人们',
        aboutText1: '从小公寓里的周末爱好到社区的基石，Antz桌游咖啡厅致力于创造难忘的桌游体验和持久的友谊。',
        aboutText2: '我们相信，在越来越数字化的世界中，桌子上的物理连接比以往任何时候都更加珍贵。无论您是硬核策略家还是只是想要一个休闲的夜晚，我们都为每个人建造了一个圣所。',
        aboutCommunityTitle: '我们的Antz社区',
        aboutCommunityText: '加入我们不断壮大的桌游爱好者大家庭，创造持久的友谊',
        aboutFacilitiesTitle: '我们的空间',
        aboutFacilitiesText: '探索我们不同的区域，从社交游戏大厅到沉浸式的私人“神秘密室”。',
        joinCommunity: '加入我们的社区',
        community: '社区',
        communityDesc: '我们不时举办锦标赛和聚会，确保没有人独自游戏。您在美里的第二个家。',
        funFirst: '乐趣第一',
        funFirstDesc: '拥有500+精选游戏库，从经典到最新的Kickstarter热门作品。',
        inclusivity: '包容性',
        inclusivityDesc: '一个安全、欢迎所有年龄和技能水平的空间。我们的游戏大师随时准备教学。',
        
        // Contact page
        contactTitle: '联系我们',
        contactText: '对我们的桌游收藏有疑问或想要预订私人神秘密室？我们在这里帮助您在美里策划下一个传奇的游戏之夜。',
        contactLocation: '我们的位置',
        contactDirect: '直接联系',
        contactFollow: '关注我们',
        whatsappText: '在WhatsApp上联系我们',
        
        // Boardgame page
        boardgameTitle: '建设中',
        boardgameText: '我们正在努力为您带来完整的桌游收藏。请稍后查看！',
        backHome: '返回首页',
        filters: '筛选器',
        refineCollection: '精化您的收藏',
        searchGames: '搜索游戏...',
        category: '类别',
        strategy: '策略',
        partyGames: '聚会游戏',
        family: '家庭',
        cardGames: '卡牌游戏',
        difficulty: '难度',
        beginner: '初学者',
        intermediate: '中级',
        advanced: '高级',
        players: '玩家',
        resetFilters: '重置所有筛选器',
        
        // Jubensha page
        jubenshaSubtitle: '秘密死去，谜团重生。',
        jubenshaArt: '剧本的艺术',
        jubenshaDesc: '剧本杀不仅仅是一个游戏。它是深入一个被遗忘的叙事，每一声耳语都具有分量，每一个阴影都隐藏着嫌疑人。',
        playersEntangled: '3-8名玩家纠缠',
        hoursOfSuspense: '2-4小时的悬疑',
        multipleStorylines: '多种故事线可选',
        availableLanguages: '提供中文和英文',
        availableDossiers: '可用档案',
        mysteryCrime: '神秘与犯罪',
        mysteryCrimeDesc: '证据报告和证人陈述等待您的冷静分析。',
        horrorThriller: '恐怖惊悚',
        horrorThrillerDesc: '有些秘密注定要被埋葬。祈祷它们不会找到您。',
        historicalNoir: '历史黑色',
        historicalNoirDesc: '踏入过去浸满鲜血的页面。历史是用墨水书写的。',
        darkFantasy: '黑暗奇幻',
        darkFantasyDesc: '魔法是诅咒，怪物披着人类的面孔。',
        jubenshaFacilities: '我们的设施',
        facilitiesDesc: '沉浸在我们精心设计的剧本杀房间中',
        mysteryChamber: '神秘密室',
        mysteryCapacity: '容量：4-6名玩家',
        mysteryChamberDesc: '一个亲密的环境，非常适合经典侦探神秘和心理惊悚片。深色木制家具和复古装饰为揭开秘密创造了完美的氛围。',
        grandHall: '大型调查厅',
        grandCapacity: '容量：6-8名玩家',
        grandHallDesc: '为大型团体和复杂故事线设计的宽敞房间。设有多个座位区域和氛围灯光，非常适合史诗般的历史剧和超自然神秘，阴影传语秘密，每个角落都充满恐惧。',
        jubenshaLegends: '传奇的诞生',
        legendsDesc: '见证那些敢于揭开真相的人的故事',
        signDestiny: '签署您的命运',
        destinyDesc: '剧本已经写好。您在桌子旁的座位很冷。您会接受召唤吗？',
        jubenshaBook: '立即预约',
        curatorsText: '美里精美神秘和黑暗的策展人。',
        truthText: '© 2017 Antz桌游。真相就在那里。',
        mysteriesText: '© 2025 Antz剧本杀。秘密死去，谜团重生。'
    }
};

function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'zh' : 'en';
    switchLanguage(newLang);
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

function updatePageLanguage() {
    const t = translations[currentLanguage];
    
    // Update all language display elements
    const langDisplays = document.querySelectorAll('[id*="current-lang"]');
    langDisplays.forEach(display => {
        display.textContent = currentLanguage === 'en' ? 'EN' : '中';
    });
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            // Handle special cases for HTML content
            if (key === 'aboutTitle' && currentLanguage === 'zh') {
                element.innerHTML = '在美里聚集人们';
            } else if (key === 'contactTitle' && currentLanguage === 'zh') {
                element.innerHTML = '联系我们';
            } else if (key === 'aboutTitle' && currentLanguage === 'en') {
                element.innerHTML = 'Bringing People Together in <span class="text-primary italic">Miri</span>';
            } else if (key === 'contactTitle' && currentLanguage === 'en') {
                element.innerHTML = 'Get in <span class="text-primary italic">Touch</span>';
            } else {
                element.textContent = t[key];
            }
        }
    });
}

// Initialize language system
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
});