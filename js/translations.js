const translations = {
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-about': 'À propos',
        'nav-projects': 'Projets',
        'nav-experience': 'Expérience',
        'nav-education': 'Formation',
        'nav-contact': 'Contact',

        // Hero section
        'hero-title': 'Transformation Digitale & Intelligence Artificielle',
        'hero-description': 'Étudiant en dernière année d\'ingénierie en Transformation Digitale et Intelligence Artificielle, à la recherche d\'un stage PFE dans les domaines de l\'IA, de la Data, du Cloud ou du DevOps. Compétent en Machine Learning, LLMs, Docker, Azure et CI/CD. Apprenant motivé avec de fortes capacités de résolution de problèmes.',
        'contact-me': 'Me contacter',
        'view-cv': 'Voir le CV',
        'cv-link': 'static/docs/AYOUB GORRY CV.pdf', 

        // About section
        'about-title': 'À propos',
        'technical-skills': 'Compétences Techniques',
        'programming-languages': 'Langages de Programmation',
        'cloud-database': 'Base de données',

        // Projects section
        'projects-title': 'Projets',
        'view-project': 'Voir le projet',
        'demo': 'Demo',
        "devops_desc":'Analyse comparative et automatisation DevOps des cores 4G et 5G vers le cloud-native',
        'judiciAIre_desc': 'Chatbot juridique intelligent basé sur l\'IA pour le droit marocain',
        'cv-genius-desc': 'Classification des CVs avec Machine Learning',
        'ivision-desc': 'Application Web basée sur le Cloud et IA',
        'school-management-desc': 'Système de Gestion Scolaire',
        'razy-desc': 'Linux File System & Distribution',
        'colorizer-desc': 'Application de Colorisation d\'Images',
        'rdeef-desc': 'Projet de stage en REGIE AUTONOME INTERCOMMUNALE DE DISTRIBUTION D\'EAU ET D\'ELECTRICITE DE FES',
        'view-doc': 'Voir Doc',

        // Experience section
        'experience-title': 'Expérience Professionnelle',
        'abb-internship': 'DStagiaire Data Science – Al Barid Bank, Rabat',
        'abb-internship-tasks': [
            'Développement d\'un système de détection de fraude aux cartes bancaires sur des données fortement déséquilibrées (taux de fraude de 0,67 %).',
            'Application de techniques de feature engineering et de stratégies de rééchantillonnage pour améliorer la généralisation.',
            'Optimisation des modèles XGBoost, Random Forest et LightGBM, atteignant 95,9 % de précision et 88 % de rappel.'
        ],
        
        'web-dev-internship': 'Stage en Développement Web - RADEEF, Fès',
        'internship-tasks': [
            'Développement d\'applications web',
            'Optimisation des processus existants',
            'Collaboration avec l\'équipe technique'
        ],

        // Education section
        'education-title': 'Formation',
        'ensa-title': 'École Nationale des Sciences Appliquées d\'Al-Hoceima',
        'engineering-degree': 'Cycle d\'ingenieur en Transformation Digitale & Intelligence Artificielle',
        'engineering-period': '2023 - Présent',
        'cp-degree': 'Cycle Préparatoire(MIP)',
        'cp-period': '2021 - 2023',
        'lycee': 'Lycée  Moulay Idriss, Fés',
        'bac': 'Baccalauréat Sciences Mathématiques B',
        'bac-period': '2021',

        // Contact section
        'name-contact': 'Nom',

        // Copyright section
        'copyright': '© 2025 Ayoub Gorry. Tous droits réservés.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-contact': 'Contact',

        // Hero section
        'hero-title': 'Digital Transformation & Artificial Intelligence',
        'hero-description': 'Final-year Digital Transformation & AI engineering student seeking a PFE internship in AI, Data, Cloud, or DevOps. Skilled in ML, LLMs, Docker, Azure, and CI/CD. Motivated learner with strong problem-solving abilities.',
        'contact-me': 'Contact me',
        'view-cv': 'View Resume',
        'cv-link': 'static/resume_gorry_ayoub.pdf', 

        // About section
        'about-title': 'About',
        'technical-skills': 'Technical Skills',
        'programming-languages': 'Programming Languages',
        'cloud-database': 'Databases',

        // Projects section
        'projects-title': 'Projects',
        'view-project': 'View project',
        'demo': 'Demo',
        'devops_desc':'Comparative Analysis and DevOps Automation of 4G and 5G Cores toward Cloud-Native',
        'judiciAIre_desc': 'AI-Powered Legal Chatbot for Moroccan Law',
        'cv-genius-desc': 'CV Classification with Machine Learning',
        'ivision-desc': 'Cloud and AI-based Web Application',
        'school-management-desc': 'School Management System',
        'razy-desc': 'Linux File System & Distribution',
        'colorizer-desc': 'Image Colorization Application',
        'rdeef-desc': 'RADEEF Internship Project - Fez',
        'view-doc': 'View Doc',

        // Experience section
        'experience-title': 'Professional Experience',
        'abb-internship': 'Data Science Intern – Al Barid Bank, Rabat',
        'abb-internship-tasks': [
            'Built a credit card fraud detection system on highly imbalanced data (0.67% fraud rate)',
            'Applied feature engineering + resampling strategies to improve generalization.',
            'Optimized XGBoost, Random Forest, LightGBM models, achieving 95.9% accuracy and 88% recall.'
        ],

        'web-dev-internship': 'Web Development Internship - RADEEF, Fez',
        'internship-tasks': [
            'Web application development',
            'Optimization of existing processes',
            'Collaboration with technical team'
        ],

        // Education section
        'education-title': 'Education',
        'ensa-title': 'National School of Applied Sciences of Al-Hoceima',
        'engineering-degree': 'Digital Transformation & Artificial Intelligence Engineer',
        'engineering-period': '2023 - Present',
        'cp-degree': 'Preparatory Cycle(MIP)',
        'cp-period': '2021 - 2023',
        'lycee': 'High School of Moulay Idriss, Fez',
        'bac': 'Baccalaureate Mathematics Sciences B',
        'bac-period': '2021',

        // Contact section
        'name-contact': 'Name',

        // Copyright section
        'copyright': '© 2025 Ayoub Gorry. All rights reserved.'
    }
};

// Fonction pour changer la langue
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    document.documentElement.lang = lang;
    
    // Traduction des éléments simples (texte)
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Traduction des listes (comme les tâches du stage)
    document.querySelectorAll('[data-i18n-list]').forEach(element => {
        const key = element.getAttribute('data-i18n-list');
        if (translations[lang][key] && Array.isArray(translations[lang][key])) {
            element.innerHTML = translations[lang][key]
                .map(item => `<li>${item}</li>`)
                .join('');
        }
    });

    // 🔹 Traduction des liens (comme le lien du CV)
    document.querySelectorAll('[data-i18n-link]').forEach(element => {
        const key = element.getAttribute('data-i18n-link');
        if (translations[lang][key]) {
            element.setAttribute('href', translations[lang][key]);
        }
    });

    // Sauvegarder la préférence de langue
    localStorage.setItem('preferred-language', lang);
}

// Initialiser la langue
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    setLanguage(savedLang);
});
