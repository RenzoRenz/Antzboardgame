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
        mysteriesText: '© 2025 AntzJubensha. Where secrets die and mysteries come alive.',
        
        // Privacy Policy
        privacyTitle: 'Privacy Policy',
        lastUpdated: 'Last Updated: January 2025',
        privacySection1Title: '1. Information We Collect',
        privacySection1Intro: 'When you book a session or contact us, we may collect:',
        privacySection1Item1: 'Name and contact information (phone number, email)',
        privacySection1Item2: 'Booking details and preferences',
        privacySection1Item3: 'Payment information (processed securely through third-party providers)',
        privacySection2Title: '2. How We Use Your Information',
        privacySection2Intro: 'We use your information to:',
        privacySection2Item1: 'Process and confirm your bookings',
        privacySection2Item2: 'Communicate with you about your reservations',
        privacySection2Item3: 'Send promotional offers (with your consent)',
        privacySection2Item4: 'Improve our services and customer experience',
        privacySection3Title: '3. Data Protection',
        privacySection3Text: 'We implement appropriate security measures to protect your personal information. Your data is stored securely and accessed only by authorized personnel.',
        privacySection4Title: '4. Third-Party Services',
        privacySection4Text: 'We may use third-party services (WhatsApp, payment processors) that have their own privacy policies. We encourage you to review their policies.',
        privacySection5Title: '5. Your Rights',
        privacySection5Intro: 'You have the right to:',
        privacySection5Item1: 'Access your personal data',
        privacySection5Item2: 'Request correction of inaccurate data',
        privacySection5Item3: 'Request deletion of your data',
        privacySection5Item4: 'Opt-out of marketing communications',
        privacySection6Title: '6. Contact Us',
        privacySection6Text: 'For privacy concerns or data requests, contact us via WhatsApp at',
        
        // Terms & Conditions
        termsTitle: 'Terms & Conditions',
        termsAcceptance: 'By accessing and using this website or visiting our premises, you accept and agree to be bound by these Terms and Conditions.',
        termsSection1Title: '1. Booking & Reservations',
        termsSection1Item1: 'Bookings must be made in advance via WhatsApp or in-person',
        termsSection1Item2: 'Reservations are subject to availability',
        termsSection1Item3: 'Group bookings (5+ people) should be made at least 48 hours in advance',
        termsSection1Item4: 'Special arrangements can be made for large groups or events',
        termsSection1Item5: 'Please notify us if you need to cancel or reschedule',
        termsSection1Item6: 'Cancellations can be made via WhatsApp',
        termsSection1Item7: 'Minimum age requirements may apply for certain games',
        termsSection1Item8: 'Parental supervision required for children under 12',
        termsSection2Title: '2. Facility Usage',
        termsSection2Item1: 'All games and equipment must be handled with care',
        termsSection2Item2: 'Damaged or lost game components must be reported immediately',
        termsSection2Item3: 'Food and drinks are allowed but must be kept away from game materials',
        termsSection2Item4: 'Customers are responsible for any damage caused to games or facilities',
        termsSection3Title: '3. Conduct & Behavior',
        termsSection3Item1: 'Respectful behavior towards staff and other customers is required',
        termsSection3Item2: 'Disruptive behavior may result in removal without refund',
        termsSection3Item3: 'Smoking and vaping are prohibited inside the premises',
        termsSection3Item4: 'Children under 12 must be accompanied by an adult',
        termsSection4Title: '4. Payment Terms',
        termsSection4Item1: 'Payment is required before or at the start of your session',
        termsSection4Item2: 'We accept cash and electronic payments',
        termsSection4Item3: 'Prices are subject to change without prior notice',
        termsSection4Item4: 'No refunds for early departure or unused time',
        termsSection5Title: '5. Liability',
        termsSection5Intro: 'AntzBoardgame is not liable for:',
        termsSection5Item1: 'Personal belongings lost, stolen, or damaged on premises',
        termsSection5Item2: 'Personal injuries unless caused by our negligence',
        termsSection5Item3: 'Disputes between customers',
        termsSection6Title: '6. Photography & Media',
        termsSection6Text: 'By visiting our premises, you consent to being photographed or recorded for promotional purposes. Please inform staff if you prefer not to be included.',
        termsSection7Title: '7. Changes to Terms',
        termsSection7Text: 'We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.',
        termsSection8Title: '8. Contact',
        termsSection8Text: 'For questions about these terms, contact us via WhatsApp at'
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
        mysteriesText: '© 2025 Antz剧本杀。秘密死去，谜团重生。',
        
        // Privacy Policy
        privacyTitle: '隐私政策',
        lastUpdated: '最后更新：2025年1月',
        privacySection1Title: '1. 我们收集的信息',
        privacySection1Intro: '当您预订或联系我们时，我们可能会收集：',
        privacySection1Item1: '姓名和联系信息（电话号码、电子邮件）',
        privacySection1Item2: '预订详情和偏好',
        privacySection1Item3: '付款信息（通过第三方提供商安全处理）',
        privacySection2Title: '2. 我们如何使用您的信息',
        privacySection2Intro: '我们使用您的信息来：',
        privacySection2Item1: '处理和确认您的预订',
        privacySection2Item2: '与您沟通有关您的预订',
        privacySection2Item3: '发送促销优惠（经您同意）',
        privacySection2Item4: '改善我们的服务和客户体验',
        privacySection3Title: '3. 数据保护',
        privacySection3Text: '我们实施适当的安全措施来保护您的个人信息。您的数据安全存储，仅由授权人员访问。',
        privacySection4Title: '4. 第三方服务',
        privacySection4Text: '我们可能使用具有自己隐私政策的第三方服务（WhatsApp、支付处理器）。我们鼓励您查看他们的政策。',
        privacySection5Title: '5. 您的权利',
        privacySection5Intro: '您有权：',
        privacySection5Item1: '访问您的个人数据',
        privacySection5Item2: '请求更正不准确的数据',
        privacySection5Item3: '请求删除您的数据',
        privacySection5Item4: '选择退出营销通讯',
        privacySection6Title: '6. 联系我们',
        privacySection6Text: '如有隐私问题或数据请求，请通过WhatsApp联系我们：',
        
        // Terms & Conditions
        termsTitle: '条款与条件',
        termsAcceptance: '通过访问和使用本网站或访问我们的场所，您接受并同意受这些条款和条件的约束。',
        termsSection1Title: '1. 预订与预约',
        termsSection1Item1: '必须通过WhatsApp或现场提前预订',
        termsSection1Item2: '预订视供应情况而定',
        termsSection1Item3: '团体预订（5人以上）应至少提前48小时预订',
        termsSection1Item4: '可为大型团体或活动做出特殊安排',
        termsSection1Item5: '如需取消或重新安排，请通知我们',
        termsSection1Item6: '可通过WhatsApp取消预订',
        termsSection1Item7: '某些游戏可能有最低年龄要求',
        termsSection1Item8: '12岁以下儿童需要家长监督',
        termsSection2Title: '2. 设施使用',
        termsSection2Item1: '所有游戏和设备必须小心处理',
        termsSection2Item2: '损坏或丢失的游戏组件必须立即报告',
        termsSection2Item3: '允许食物和饮料，但必须远离游戏材料',
        termsSection2Item4: '客户对游戏或设施造成的任何损坏负责',
        termsSection3Title: '3. 行为规范',
        termsSection3Item1: '需要对员工和其他客户保持尊重',
        termsSection3Item2: '破坏性行为可能导致被驱逐且不退款',
        termsSection3Item3: '场所内禁止吸烟和电子烟',
        termsSection3Item4: '12岁以下儿童必须由成人陪同',
        termsSection4Title: '4. 付款条款',
        termsSection4Item1: '需要在游戏开始前或开始时付款',
        termsSection4Item2: '我们接受现金和电子支付',
        termsSection4Item3: '价格可能会在不事先通知的情况下更改',
        termsSection4Item4: '提前离开或未使用的时间不予退款',
        termsSection5Title: '5. 责任',
        termsSection5Intro: 'Antz桌游不对以下情况负责：',
        termsSection5Item1: '在场所内丢失、被盗或损坏的个人物品',
        termsSection5Item2: '除非由我们的疏忽造成的人身伤害',
        termsSection5Item3: '客户之间的纠纷',
        termsSection6Title: '6. 摄影与媒体',
        termsSection6Text: '访问我们的场所即表示您同意被拍摄或录制用于宣传目的。如果您不希望被包括在内，请告知工作人员。',
        termsSection7Title: '7. 条款变更',
        termsSection7Text: '我们保留随时修改这些条款的权利。继续使用我们的服务即表示接受更新的条款。',
        termsSection8Title: '8. 联系方式',
        termsSection8Text: '如有关于这些条款的问题，请通过WhatsApp联系我们：'
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
            } else if (key === 'privacyTitle' && currentLanguage === 'zh') {
                element.innerHTML = '隐私<span class="text-primary italic">政策</span>';
            } else if (key === 'privacyTitle' && currentLanguage === 'en') {
                element.innerHTML = 'Privacy <span class="text-primary italic">Policy</span>';
            } else if (key === 'termsTitle' && currentLanguage === 'zh') {
                element.innerHTML = '条款与<span class="text-primary italic">条件</span>';
            } else if (key === 'termsTitle' && currentLanguage === 'en') {
                element.innerHTML = 'Terms & <span class="text-primary italic">Conditions</span>';
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