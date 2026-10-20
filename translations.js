(() => {
    const translations = {
        'Home': '首頁',
        'About': '關於我們',
        'Department Introduction': '系所介紹',
        'Introduction': '系所介紹',
        'Mission & Vision': '使命與願景',
        'Department History': '系所沿革',
        'History': '系所沿革',
        'The department archive': '系所沿革檔案',
        'Different chapters. One evolving story.': '不同的篇章，同一段持續演進的故事。',
        'Explore the milestones that shaped us.': '探索塑造本系的重要里程碑。',
        'Select a chapter': '選擇篇章',
        'Foundations': '奠定基礎',
        'Digital shift': '數位轉型',
        'New direction': '全新方向',
        'Broader horizons': '拓展視野',
        'A new chapter': '嶄新篇章',
        'A name may change.': '名稱或許會改變。',
        'A commitment to education continues.': '對教育的承諾始終如一。',
        'Business Management / TCU': '慈濟大學企業管理學系',
        'Chapter': '篇章',
        'The accounting roots': '會計的起點',
        'The beginning': '故事的開始',
        'Every journey starts somewhere.': '每段旅程都有起點。',
        'A four-year Accounting program was introduced, laying the foundation for the department’s academic journey.': '設立四年制會計學系，為本系的學術發展奠定基礎。',
        'A foundation for the future': '奠定未來的基礎',
        'Accounting Information': '會計資訊學系',
        'Accounting meets information technology.': '會計與資訊科技的結合。',
        'The department was renamed Accounting Information to prepare accounting professionals for a changing technological environment.': '本系更名為會計資訊學系，培育能因應科技環境變遷的會計專業人才。',
        'Knowledge for a connected world': '連結世界的知識',
        'Marketing & Distribution Management': '行銷與流通管理學系',
        'A new name. A different perspective.': '更名啟新，視野也隨之拓展。',
        'The Department of Accounting Information was renamed the Department of Marketing and Distribution Management.': '會計資訊學系更名為行銷與流通管理學系。',
        'Connecting ideas and people': '連結理念與人群',
        'Room for a broader ambition.': '開啟更寬廣的發展。',
        'The department was renamed Business Management, opening a new chapter in its evolving academic identity.': '本系更名為企業管理學系，開啟學術發展的新篇章。',
        'A broader view of business': '拓展商業視野',
        'A new chapter at Tzu Chi University': '慈濟大學的新篇章',
        'Coming together': '攜手同行',
        'Stronger roots. New possibilities.': '扎根更深，開創更多可能。',
        'On August 1, Tzu Chi University of Science and Technology merged with Tzu Chi University. The department continued its journey as part of the unified TCU.': '8月1日，慈濟科技大學與慈濟大學合併。本系也在整合後的慈濟大學持續發展。',
        'Growing together at TCU': '在慈濟大學共同成長',
        'Read the official record ↗': '閱讀官方紀錄 ↗',
        'Previous milestone': '上一個里程碑',
        'Next milestone': '下一個里程碑',
        'Department history milestones': '系所歷史里程碑',
        'Milestones adapted from the university’s academic history and merger announcement.': '本頁里程碑內容改編自本校系所沿革與合併公告。',
        'Vision & Mission ↗': '願景與使命 ↗',
        'Department history': '系所沿革',
        'Academics': '學術課程',
        'Curriculum': '課程規劃',
        'Graduation Requirements': '畢業要求',
        'Learning Resources': '學習資源',
        'Academic Regulations & Forms': '學術規章與表格',
        'Faculty': '師資陣容',
        'Student Life': '學生生活',
        'Student Activities': '學生社團活動',
        'Student Experiences': '學生經驗分享',
        'Clubs & Organizations': '社團與組織',
        'Internship Opportunities': '實習機會',
        'Career Paths': '職涯發展',
        'Alumni Stories': '校友故事',
        'News & Events': '最新消息與活動',
        'Latest News': '最新消息',
        'Upcoming Events': '近期活動',
        'Department Announcements': '系所公告',
        'Student Achievements': '學生傑出表現',
        'More': '更多',
        'Contact Us': '聯絡我們',
        'Tzu Chi University Main Website': '慈濟大學官方網站',
        'Useful Links': '相關連結',
        'Search': '搜尋',
        'Mission': '使命',
        'Department of': '企業管理',
        'Vision & Mission': '願景與使命',
        'Students studying together on campus grass': '在校園草地上一起學習的學生',
        'International students visiting a campus building': '國際學生參訪校園建築',
        'Students gathering on campus': '在校園聚會的學生',
        'Tzu Chi University': '慈濟大學',
        'Business Management': '企業管理學系',
        'Department of Business Management': '企業管理學系',
        'Humanistic Values': '人文素養',
        'Creative Thinking': '創意思考',
        'Responsible Business': '負責任的商業實踐',
        'Business knowledge grounded in humanistic values.': '以人文素養為根基的商業知識。',
        'Develop the knowledge and capabilities to create social innovation, manage sustainably, understand industries, and make informed business decisions.': '培養社會創新、永續管理、產業分析與商業決策所需的知識及能力。',
        'Explore Curriculum': '探索課程規劃',
        'Social Innovation': '社會創新',
        'Connect business with sustainable management.': '結合商業與永續管理。',
        'Operations & Industry': '營運與產業分析',
        'Understand operations and analyze industries.': '了解營運管理並分析產業。',
        'Business & Finance': '商業與財務',
        'Build knowledge and practical capabilities.': '建立專業知識與實務能力。',
        'Business Intelligence': '商業智慧',
        'Apply insights to business decisions.': '運用洞見制定商業決策。',
        'Our Learning Goals': '本系培育目標',
        'Five Distinctive Talents': '五項特色人才素養',
        'The department cultivates humanistic qualities, creative thinking, teamwork, a cross-cultural perspective, and workplace ethics.': '本系培育人文素養、創意思考、團隊合作、跨文化視野與職場倫理。',
        'Students build business capabilities through social innovation and sustainable management, operations and industry analysis, business and finance, and business intelligence.': '學生透過社會創新與永續管理、營運與產業分析、商業與財務，以及商業智慧等領域，建立商業專業能力。',
        'Read Department Introduction': '閱讀系所介紹',
        'Students learning together outdoors': '學生在戶外共同學習',
        'Humanistic qualities. Creative thinking. Teamwork. Cross-cultural perspective. Workplace ethics.': '人文素養、創意思考、團隊合作、跨文化視野與職場倫理。',
        'Campus life & student success': '校園生活與學生成就',
        "What's happening": '最新動態',
        'A quick look at student achievements and the latest department updates.': '一覽學生成就與系所最新消息。',
        'Student achievements': '學生成就',
        'Proud moments': '榮耀時刻',
        '3rd place · Proposal competition': '提案競賽第三名',
        'SustainSort: AI One Drop Smart Waste Sorting Bin': 'SustainSort：AI One Drop 智慧垃圾分類桶',
        'Business Management students earned third place in Tzu Chi University\'s 6th “Maker + Are You Ready?” Proposal Competition.': '企業管理學系學生於慈濟大學第六屆「Maker + Are You Ready？」提案競賽（第二梯次）榮獲第三名。',
        'Read the official announcement': '閱讀官方公告',
        '2nd place · 2025': '2025 年第二名',
        'National Business & Management Project Competition': '全國商業與管理專題競賽',
        'A student team received second place in the Management Category for a feasibility study on using black soldier fly larvae to treat sludge waste.': '學生團隊以黑水虻幼蟲處理污泥廢棄物之可行性評估專題，榮獲管理組第二名。',
        'Official announcement': '官方公告',
        'Honorable mention · 2025': '2025 年佳作',
        'Students were recognized in the Management Category for a project exploring generative AI-assisted design of educational training test questions.': '學生團隊以生成式 AI 輔助設計教育訓練測驗題目之可行性研究，榮獲管理組佳作。',
        'Official university dates': '校方正式行事曆',
        'Academic calendar': '學年度行事曆',
        'Key academic dates and university events for the 2026–2027 academic year, based on Tzu Chi University\'s official calendar.': '依據慈濟大學官方行事曆整理的 2026–2027 學年度重要日期與校園活動。',
        'Download the full academic calendar': '下載完整學年度行事曆',
        'Choose a calendar month': '選擇行事曆月份',
        'OCT': '十月',
        'NOV': '十一月',
        'DEC': '十二月',
        'JAN': '一月',
        'FEB': '二月',
        'MAR': '三月',
        'APR': '四月',
        'MAY': '五月',
        'JUN': '六月',
        'October': '十月',
        'November': '十一月',
        'December': '十二月',
        'January': '一月',
        'February': '二月',
        'March': '三月',
        'April': '四月',
        'May': '五月',
        'June': '六月',
        'October 2026': '2026 年 10 月',
        'November 2026': '2026 年 11 月',
        'December 2026': '2026 年 12 月',
        'January 2027': '2027 年 1 月',
        'February 2027': '2027 年 2 月',
        'March 2027': '2027 年 3 月',
        'April 2027': '2027 年 4 月',
        'May 2027': '2027 年 5 月',
        'June 2027': '2027 年 6 月',
        'University holiday: Taiwan Commemoration Day': '臺灣光復節校休日',
        'October 26 is the day off for holiday observance.': '10 月 26 日為補假日。',
        'University holiday': '校休日',
        'Midterm examination week': '期中考週',
        'First-semester midterm exams.': '第一學期期中考。',
        'Academic milestone': '學期重要日程',
        'Tzu Chi 60th Anniversary Sutra Adaptation': '慈濟六十週年經藏演繹',
        'University anniversary event listed in the academic calendar.': '學年度行事曆列出的校慶活動。',
        'University event': '校園活動',
        'University Sports Day': '校慶運動會',
        'No classes.': '停課。',
        'Two-thirds of the semester completed': '學期進度達三分之二',
        'First-semester academic milestone.': '第一學期重要日程。',
        'Constitution Day': '行憲紀念日',
        'Final examination week': '期末考週',
        'First-semester final exams.': '第一學期期末考。',
        'Winter break begins': '寒假開始',
        'First semester ends on January 31.': '第一學期於 1 月 31 日結束。',
        'Semester break': '學期假期',
        'Fall semester ends': '第一學期結束',
        'End of the first semester.': '第一學期結束。',
        'Second semester begins': '第二學期開始',
        'First day of classes.': '開學上課。',
        'Peace Memorial Day': '和平紀念日',
        'Late course add period': '加選課程期間',
        'Paper applications for late course additions.': '以紙本申請加選課程。',
        'Second-semester midterm exams.': '第二學期期中考。',
        'Labor Day': '勞動節',
        'Dragon Boat Festival': '端午節',
        'Commencement ceremony': '畢業典禮',
        'University graduation ceremony.': '全校畢業典禮。',
        'Second-semester final exams.': '第二學期期末考。',
        'No listed dates for this month.': '本月沒有列出的校曆日期。',
        'SustainSort team wins third place for its AI One Drop Smart Waste Sorting Bin proposal': 'SustainSort 團隊以 AI One Drop 智慧垃圾分類桶提案榮獲第三名',
        'Good People': '良善的人',
        'Good Business': '良善的企業',
        'A Better World': '更美好的世界',
        'Cultivating compassionate leaders for a sustainable future.': '培育具有慈悲精神、共創永續未來的領導人才。',
        'The Department of Business Management at Tzu Chi University nurtures students with professional knowledge, ethical values, and a global perspective — empowering them to create a positive impact in society and the world.': '慈濟大學企業管理學系培養學生具備專業知識、倫理價值與全球視野，讓學生有能力為社會及世界帶來正向影響。',
        'Explore Our Program': '探索我們的課程',
        'About Us': '認識我們',
        'Compassion & Integrity': '慈悲與誠信',
        'Build character, lead with heart.': '培養品格，以真誠之心領導。',
        'Quality Education': '優質教育',
        'Bridging theory and practice.': '連結理論與實務。',
        'Global Vision': '全球視野',
        'Think globally, act locally.': '放眼全球，立足在地。',
        'Social Impact': '社會影響力',
        'Business for a kinder world.': '以商業實踐共創友善世界。',
        'About Our Department': '關於我們的系所',
        'Learn · Grow · Make an Impact': '學習 · 成長 · 創造影響',
        "At Tzu Chi University's Business Management Department, we emphasise holistic education that combines academic excellence with compassion, sustainability, and real-world experience.": '慈濟大學企業管理學系重視全人教育，融合學術卓越、慈悲關懷、永續理念與實務經驗。',
        'Our goal is to develop future business leaders who care — for people, for society, and for the environment.': '我們致力培育關懷人群、社會與環境的未來企業領導人才。',
        'Learn More': '了解更多',
        '“Business is not just about profit, but about creating a better future for all.”': '「企業不只是追求利潤，更要為所有人創造更美好的未來。」',
        'ABOUT': '關於我們',
        'Cultivating ethical leaders for a better world': '培育具有倫理素養的領導人才，共創美好世界',
        'The Department of Business Management at Tzu Chi University combines solid academic foundation with humanistic values, preparing students to become innovative, responsible, and compassionate professionals in a global society.': '慈濟大學企業管理學系結合扎實的學術基礎與人文價值，培養學生在全球社會中成為創新、負責且富有慈悲心的專業人才。',
        'INTRODUCTION': '系所介紹',
        'More Than Business.': '不只是企業管理。',
        'A Better Tomorrow.': '更美好的明天。',
        'The Department of Business Management focuses on cultivating students with professional knowledge, humanistic values and a global perspective. We aim to develop well-rounded individuals who can create positive social impact through innovative thinking, digital skills, and a commitment to sustainability.': '企業管理學系致力培養學生具備專業知識、人文價值與全球視野。我們期望培育全方位人才，透過創新思維、數位技能與永續承諾，為社會帶來正向影響。',
        'Solid Academic': '扎實的學術',
        'Foundation': '基礎',
        'Innovative': '創新',
        'Thinking': '思維',
        'Global': '全球',
        'Perspective': '視野',
        'Social': '社會',
        'Responsibility': '責任',
        'WHY CHOOSE US': '為什麼選擇我們',
        'Your Growth,': '你的成長，',
        'Our Commitment': '我們的承諾',
        'We provide a supportive learning environment, experienced faculty, and diverse opportunities to help you grow academically, professionally, and personally.': '我們提供完善的學習環境、經驗豐富的師資與多元機會，協助你在學業、職涯與個人成長上持續進步。',
        'Learning today,': '今日學習，',
        'leading tomorrow.': '引領明日。',
        'Interdisciplinary': '跨領域',
        'Curriculum': '課程規劃',
        'Integrating management, finance, marketing, information systems and more.': '整合管理、財務、行銷、資訊系統等多元領域。',
        'International': '國際',
        'Exposure': '交流',
        'Exchange programs, overseas internships and global partnerships.': '交換計畫、海外實習與全球合作夥伴關係。',
        'Practical Learning': '實務學習',
        'Case studies, industry projects, company visits and hands-on experience.': '透過個案研究、產業專案、企業參訪與實作累積經驗。',
        'Humanistic Values': '人文價值',
        'Service learning and volunteer activities to make a positive impact on society.': '透過服務學習與志工活動，為社會帶來正向影響。',
        'ACADEMIC PROGRAMS': '學術課程',
        'Four Core Learning Fields': '四大核心學習領域',
        'We offer a comprehensive curriculum that combines theory with practice, helping students build the skills and knowledge needed for a dynamic future.': '我們提供結合理論與實務的完整課程，協助學生建立迎向多變未來所需的技能與知識。',
        'View All Programs': '查看所有課程',
        'Operations Management': '作業管理',
        'Improve efficiency and create value through effective operations.': '透過有效的營運提升效率並創造價值。',
        'View Courses': '查看課程',
        'Marketing Management': '行銷管理',
        'Understand consumers and build strong brand strategies.': '了解消費者並建立具競爭力的品牌策略。',
        'Business Intelligence &': '商業智慧與',
        'Information Management': '資訊管理',
        'Turn data into insights for smarter decision-making.': '將數據轉化為洞見，做出更明智的決策。',
        'Financial Management': '財務管理',
        'Build financial skills for long-term success.': '培養財務能力，奠定長期成功的基礎。',
        'JOIN US': '加入我們',
        'Be Part of a Meaningful Journey': '加入一段充滿意義的旅程',
        "At Tzu Chi University, we don't just teach business —": '在慈濟大學，我們不只傳授企業管理知識——',
        'we nurture people who care, create, and make a difference.': '更培育懂得關懷、創造並帶來改變的人才。',
        'Explore Our Programs': '探索我們的課程',
        'Better Management': '更好的管理',
        'A Kinder World': '更友善的世界',
        'The purpose behind our progress': '我們持續前進的初心',
        'Vision': '願景',
        'Where we’re going.': '我們前進的方向。',
        'How we’ll get there.': '我們實踐願景的方式。',
        'Our vision · 願景': '我們的願景 · 願景',
        'A better future.': '更美好的未來。',
        'A broader perspective.': '更寬廣的視野。',
        'Advance innovative, globally connected, and socially responsible business education.': '推動創新、連結全球並具社會責任的商業教育。',
        'Innovation': '創新',
        'Global connections': '全球連結',
        'Responsibility': '責任',
        'Rooted in care. Growing with purpose.': '以關懷為根，朝目標成長。',
        'Our mission · 使命': '我們的使命 · 使命',
        'Professional minds.': '專業的頭腦。',
        'Compassionate hearts.': '慈悲的心。',
        'Develop skilled business professionals with creativity, teamwork, cross-cultural understanding, and strong ethical values.': '培育具備創造力、團隊合作力、跨文化理解力與堅定倫理價值的商業專業人才。',
        'Knowledge': '知識',
        'Character': '品格',
        'Collaboration': '合作',
        'Concise adaptations of the department’s educational goals and future vision.': '本系教育目標與未來願景的精要改寫。',
        'Official source ↗': '官方資料來源 ↗'
    };

    const originalTextNodes = [];
    const originalAttributes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            return node.parentElement.closest('script, style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
    });

    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeValue.trim()) {
            originalTextNodes.push({ node, original: node.nodeValue });
        }
    }

    document.querySelectorAll('[alt], [aria-label], [title]').forEach(element => {
        ['alt', 'aria-label', 'title'].forEach(attribute => {
            const original = element.getAttribute(attribute);
            if (original && translations[original]) {
                originalAttributes.push({ element, attribute, original });
            }
        });
    });

    const titleInEnglish = document.title;
    const titleInChinese = {
        'Tzu Chi University | Business Management': '慈濟大學｜企業管理學系',
        'About - Department of Business Management | Tzu Chi University': '關於我們－企業管理學系｜慈濟大學',
        'Vision & Mission · TCU Business Management': '願景與使命 · 慈濟大學企業管理學系',
        'Department History · TCU Business Management': '系所沿革 · 慈濟大學企業管理學系'
    }[titleInEnglish];
    const languageButton = document.querySelector('.lang-pill-btn');

    function applyLanguage(language) {
        const isChinese = language === 'zh-Hant';
        originalTextNodes.forEach(({ node, original }) => {
            const trimmed = original.trim();
            const isDepartmentTitle = titleInEnglish.startsWith('About -')
                && node.parentElement.closest('.hero-title')
                && trimmed === 'Business Management';
            const translated = isChinese
                ? (isDepartmentTitle ? '學系' : translations[trimmed])
                : null;
            const leadingWhitespace = original.match(/^\s*/)[0];
            const trailingWhitespace = original.match(/\s*$/)[0];
            node.nodeValue = translated
                ? `${leadingWhitespace}${translated}${trailingWhitespace}`
                : original;
        });
        originalAttributes.forEach(({ element, attribute, original }) => {
            element.setAttribute(attribute, isChinese ? translations[original] : original);
        });

        document.documentElement.lang = language;
        if (isChinese && titleInChinese) {
            document.title = titleInChinese;
        } else {
            document.title = titleInEnglish;
        }
        languageButton.textContent = isChinese ? 'EN' : '中文';
        languageButton.setAttribute('aria-label', isChinese ? 'Switch to English' : '切換為中文');
        languageButton.title = isChinese ? 'Switch to English' : '切換為中文';
        window.dispatchEvent(new CustomEvent('website-language-changed', { detail: { language } }));
    }

    window.translateText = function(text) {
        return document.documentElement.lang === 'zh-Hant' ? (translations[text] || text) : text;
    };

    window.toggleLanguage = function() {
        const nextLanguage = document.documentElement.lang === 'zh-Hant' ? 'en' : 'zh-Hant';
        localStorage.setItem('website-language', nextLanguage);
        applyLanguage(nextLanguage);
    };

    applyLanguage(localStorage.getItem('website-language') || 'en');
})();
