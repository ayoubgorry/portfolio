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
        'hero-description': 'Étudiant passionné par l\'IA et la transformation digitale, je combine expertise technique et vision innovante pour créer des solutions d\'avenir.',
        'contact-me': 'Me contacter',
        'view-cv': 'Voir le CV',

        // About section
        'about-title': 'À propos',
        'technical-skills': 'Compétences Techniques',
        'programming-languages': 'Langages de Programmation',
        'frameworks-tools': 'Frameworks & Outils',
        'cloud-database': 'Cloud & Base de données',
        'languages-title': 'Langues',
        'interests-title': 'Centres d\'intérêt',
        'arabic': 'Arabe - Natif',
        'french': 'Français - Courant',
        'english': 'Anglais - Courant',
        'tech-watch': 'Veille technologique',
        'e-education': 'E-Education',
        'ai': 'Intelligence Artificielle',

        // Projects section
        'projects-title': 'Projets',
        'view-project': 'Voir le projet',
        'demo': 'Demo',
        'cv-genius-desc': 'Classification des CVs avec Machine Learning',
        'ivision-desc': 'Application Web basée sur le Cloud et IA',
        'school-management-desc': 'Système de Gestion Scolaire',
        'razy-desc': 'Linux File System & Distribution',
        'colorizer-desc': 'Application de Colorisation d\'Images',

        // Experience section
        'experience-title': 'Expérience Professionnelle',
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
        'name-contact':'Nom'
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
        'hero-description': 'Student passionate about AI and digital transformation, I combine technical expertise and innovative vision to create future solutions.',
        'contact-me': 'Contact me',
        'view-cv': 'View Resume',

        // About section
        'about-title': 'About',
        'technical-skills': 'Technical Skills',
        'programming-languages': 'Programming Languages',
        'frameworks-tools': 'Frameworks & Tools',
        'cloud-database': 'Cloud & Databases',
        'languages-title': 'Languages',
        'interests-title': 'Interests',
        'arabic': 'Arabic - Native',
        'french': 'French - Fluent',
        'english': 'English - Fluent',
        'tech-watch': 'Technology Watch',
        'e-education': 'E-Education',
        'ai': 'Artificial Intelligence',

        // Projects section
        'projects-title': 'Projects',
        'view-project': 'View project',
        'demo': 'Demo',
        'cv-genius-desc': 'CV Classification with Machine Learning',
        'ivision-desc': 'Cloud and AI-based Web Application',
        'school-management-desc': 'School Management System',
        'razy-desc': 'Linux File System & Distribution',
        'colorizer-desc': 'Image Colorization Application',

        // Experience section
        'experience-title': 'Professional Experience',
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
        'name-contact':'Name'
    }
};

// Fonction pour changer la langue
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    document.documentElement.lang = lang;
    
    // Traduction des éléments simples
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

    // Sauvegarder la préférence de langue
    localStorage.setItem('preferred-language', lang);
}

// Initialiser la langue
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    setLanguage(savedLang);
});
