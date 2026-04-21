// Wael Salem Customs - Professional Interactivity (v2.0)

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const langToggle = document.getElementById('lang-toggle');
    const reveals = document.querySelectorAll('.reveal');
    const faqItems = document.querySelectorAll('.faq-item');
    
    // 1. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.padding = '0.8rem 5%';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            nav.style.padding = '1.2rem 5%';
            nav.style.background = 'rgba(255, 255, 255, 0.9)';
            nav.style.boxShadow = 'none';
        }
        
        // Trigger Reveal on Scroll
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    });

    // 2. FAQ Accordion Logic
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });

    // 3. Advanced Bilingual Toggle (Direction & Content)
    let isEnglish = true;
    langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        isEnglish = !isEnglish;
        langToggle.innerText = isEnglish ? 'AR العربية' : 'EN English';
        document.body.setAttribute('direction', isEnglish ? 'ltr' : 'rtl');

        // Content Mapping
        const translations = {
            en: {
                heroH1: "Premier Customs Solutions at Alexandria Port",
                heroP: "Leveraging 55 years of on-the-ground port expertise to navigate Egypt's modern ACID and Nafeza systems with zero delays.",
                heroBtn: "Start a Consultation",
                serviceHeader: "Core Operational Services"
            },
            ar: {
                heroH1: "حلول جمركية متميزة في ميناء الإسكندرية",
                heroP: "نستفيد من 55 عاماً من الخبرة الميدانية في الميناء لإدارة منظومات ACID و 'نافذة' الحديثة دون أي تأخير.",
                heroBtn: "ابدأ استشارة الآن",
                serviceHeader: "الخدمات التشغيلية الأساسية"
            }
        };

        const t = isEnglish ? translations.en : translations.ar;
        document.querySelector('.hero h1').innerText = t.heroH1;
        document.querySelector('.hero p').innerText = t.heroP;
        document.querySelector('.hero .btn-primary').innerText = t.heroBtn;
        document.querySelector('#services h2').innerText = t.serviceHeader;
    });

    // Trigger initial reveal on load
    window.dispatchEvent(new Event('scroll'));
});
