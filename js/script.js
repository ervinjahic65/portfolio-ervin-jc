// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Project Data ---
    // ... (your existing projectsData array remains the same)
    const projectsData = [
        {
            imageSrc: '../images/xylem-support-center.jpg',
            altText: 'Avensor Customer Care Platform Screenshot',
            title: 'Avensor Customer Care',
            description: 'A comprehensive customer support platform with ticketing, live chat, and knowledge base. Built to streamline customer interactions and improve response times.',
            technologies: ['HTML5', 'SCSS', 'Express', 'Angular 2+', 'Wordpress'],
            liveUrl: 'https://support.avensor.cloud/support?lang=en'
        },
        {
            imageSrc: '../images/kolibri.png',
            altText: 'Nectar LMS Screenshot',
            title: 'Nectar LMS',
            description: 'Learning Management System for creating and managing online courses. Features include video hosting, interactive quizzes, student progress tracking, and certification.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Laravel'],
            liveUrl: 'https://nectar-features-dev.portal-lms.com/login'
        },
        {
            imageSrc: '../images/value-innovation-2.jpg',
            altText: 'Ultimate Agency Services',
            title: 'Ultimate Agency Services',
            description: 'Examples of Growth Strategy engagements (ex: based on Ultimate Agency Services or other suitable methodologies).',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs'],
            liveUrl: 'https://ultimateagencyservices.com/in/'
        },
        {
            imageSrc: '../images/sample-record.png',
            altText: 'BIDYLS',
            title: 'BIDVLS Platform',
            description: 'Music record bet app.',
            technologies: ['Nest.js', 'TypeScript', 'APIs', 'PostgreSQL', 'HTML5 and SCSS'],
            liveUrl: 'https://trial.bidyls.com/home'
        },
        {
            imageSrc: '../images/ac40dfd9-4986-4903-8546-ea60e7bb514a_iStock-1291760747-1.webp',
            altText: 'Crowd Consumer',
            title: 'Crowd Consumer',
            description: 'With Crowd Consumer, you can analyze massive datasets in real time, capture rich survey feedback quickly, cut down on research project timelines, and drive informed decisions.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://crowdconsumer.com/in/'
        },
        {
            imageSrc: '../images/img3.jpg',
            altText: 'Easy Tech Solution',
            title: 'Easy Tech Solution',
            description: 'Easy Tech Solution is a brand-neutral platform that brings all of your data into a single view, giving the right people on your team the right information to make decisions in minutes, rather than days.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://easytech-solution.com/my/'
        },
        {
            imageSrc: '../images/c0c584e04ed13fc.png',
            altText: 'Data Elemental',
            title: 'Data Elemental',
            description: 'Data Elemental is our 360º digital intelligence platform. Flexible and customizable, it is capable of analyzing the entire catalog, content and prices of any brand, retailer or marketplace, whether B2B or B2C.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://dataelemental.netlify.app/in/'
        },
        {
            imageSrc: '../images/business-7785093_1280.png',
            altText: 'Manage DIS',
            title: 'Manage DIS',
            description: 'Manage work across teams with one platform so your employees and customers quickly get the help they need.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://managedis.com/in/'
        },
        {
            imageSrc: '../images/ai-generated-8615473_1280.png',
            altText: 'Verified Analysis',
            title: 'Verified Analysis',
            description: 'Verified Analysis is your data hub for comprehensive eCommerce analysis, providing valuable insights on companies, stores and marketplaces, summarized in our Retailer section.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://verifiedanalysis.com/in/'
        },
        {
            imageSrc: '../images/expertise-image-1.jpg',
            altText: 'Service Reality',
            title: 'Service Reality',
            description: 'Service Reality is a trusted advisor to resident and non-resident customers. It’s our job to make sure your company administration is smooth, easy, and clear.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://servicereality.netlify.app/in/'
        },
        {
            imageSrc: '../images/WealthManagement.com_LP_hero_image_book.png',
            altText: 'Reliable Wealth Lending',
            title: 'Reliable Wealth Lending',
            description: 'Task automation. Personalized client service. Valuable real-time insights.',
            technologies: ['JavaScript', 'HTML5', 'CSS3'],
            liveUrl: 'https://reliablewealthlending.com/in/'
        },
        {
            imageSrc: '../images/img2.jpg',
            altText: 'Decor Innovate Tech',
            title: 'Decor Innovate Tech',
            description: 'Project management is table stakes. Manage innovation as a lever for growth and turn your product pipeline into a predictable engine for market success.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://decorinnovatetech.com/in/'
        },
        {
            imageSrc: '../images/1.webp',
            altText: 'Consulting Columbus',
            title: 'Consulting Columbus',
            description: 'Consulting Columbus is a leading firm specializing in scam and cryptocurrency investigations. Our team of certified specialists of experienced scam investigators and cyber professionals are dedicated to helping victims of fraud just like you.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://consultingcolumbus.netlify.app/'
        },
        {
            imageSrc: '../images/blog3.jpg',
            altText: 'CTLE Medica',
            title: 'CTLE Medica',
            description: 'Whether you are in training, returning to General Practice, or considering a career change, we’ll support you every step of the way during your shifts.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://ctlemedica.com/in/'
        },
        {
            imageSrc: '../images/about_03.jpg',
            altText: 'Medic Patel',
            title: 'Medic Patel',
            description: 'At Medic Patel, we offer flexible shifts including home visits, telehealth consultations, or both. Choose from daytime, evening, or overnight shifts across multiple regions.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://medicpatel.com/in/'
        },
        {
            imageSrc: '../images/feature.jpg',
            altText: 'All The Worlds A Business',
            title: 'All The Worlds A Business',
            description: 'Embark on your entrepreneurial journey with confidence by selecting the formation package that best aligns with your vision. We offer several options designed to meet diverse needs.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://alltheworldsabusiness.com/in/'
        },
        {
            imageSrc: '../images/slider-1.png',
            altText: 'High Storm Consulting',
            title: 'High Storm Consulting',
            description: 'High Storm Consulting is with you to establish your company. High Storm Consulting gives you the best mentorship and advisory services before and while registering your company with the ease of a peace of mind.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://highstormconsulting.netlify.app/in/'
        },
        {
            imageSrc: '../images/slider-img.png',
            altText: 'Problem Magic Solution',
            title: 'Problem Magic Solution',
            description: 'Protect your business with professional IT services, cybersecurity solutions, and data security measures. Safeguard your valuable data from evolving threats with our expert team and cutting-edge technologies.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://problemmagicsolution.com/in/'
        },
        {
            imageSrc: '../images/644a8be873029875b644411c_Why-Bloomflow.webp',
            altText: 'Innovation I',
            title: 'Innovation I',
            description: 'Innovation I is the innovation management platform empowering large enterprises to thrive in today’s rapidly changing business landscape',
            technologies: ['PHP', 'Laravel', 'MySQL'],
            liveUrl: 'https://innovationi.com/in/'
        },
        {
            imageSrc: '../images/book-img.png',
            altText: 'UDRS Consulting',
            title: 'UDRS Consulting',
            description: 'UDRS Consulting is a business and organization advisor, collaborating agilely in achieving your growth challenges.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://udrsconsulting.com/in/'
        },
        {
            imageSrc: '../images/Rectangle170.png',
            altText: 'Rock Lighting',
            title: 'Rock Lighting',
            description: 'Rock Lighting is a leading provider of innovative lighting solutions, specializing in high-quality LED products for residential and commercial applications.',
            technologies: ['Angular 14', 'HTML5', 'CSS3', 'APIs'],
            liveUrl: 'https://rock-lighting.netlify.app'
        },
        {
            imageSrc: '../images/bg.png',
            altText: 'Powerworx',
            title: 'Powerworx',
            description: 'Langing page for electrical vehicles',
            technologies: ['HTML5', 'CSS3', 'APIs'],
            liveUrl: 'https://powerworx-demo.netlify.app/'
        },
        {
            imageSrc: '../images/Lorem-Ipsum-alternatives-768x492.png',
            altText: 'Lorem ipsum generator',
            title: 'Lorem ipsum generator',
            description: 'Generate dummy lorem ipsum text',
            technologies: ['JavaScript', 'HTML5', 'CSS3'],
            liveUrl: 'https://lorem-ipsum-generator-ervinjc.netlify.app/'
        },
        {
            imageSrc: '../images/hero-bg.jpg',
            altText: 'Agro & Pet Shop',
            title: 'Agro & Pet Shop',
            description: 'Simple agro seeds and pet shop website',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'PHP'],
            liveUrl: 'https://agropet.netlify.app/'
        }
    ];

    // --- Pagination and Project Loading Logic ---
    const projectGrid = document.getElementById('project-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadingIndicator = document.getElementById('loading-indicator');
    const itemsPerLoad = 8;
    let itemsCurrentlyDisplayed = 0;

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card rounded-lg shadow-xl overflow-hidden flex flex-col';

        const img = document.createElement('img');
        img.src = project.imageSrc;
        img.alt = project.altText || project.title;
        img.className = 'w-full h-48 object-cover';
        img.onerror = function() {
            this.onerror = null;
            this.src = `https://placehold.co/600x400/112240/334155?text=${encodeURIComponent(project.title.substring(0,15))}`;
            this.alt = `Placeholder image for ${project.title}`;
        };

        const contentDiv = document.createElement('div');
        contentDiv.className = 'p-6 flex flex-col flex-grow';

        const titleH3 = document.createElement('h3');
        titleH3.className = 'text-xl font-semibold text-slate-100 mb-2';
        titleH3.textContent = project.title;

        const descriptionP = document.createElement('p');
        descriptionP.className = 'text-slate-400 text-sm leading-relaxed mb-4 flex-grow';
        descriptionP.textContent = project.description;

        const techsDiv = document.createElement('div');
        techsDiv.className = 'mb-4';
        project.technologies.forEach(tech => {
            const techSpan = document.createElement('span');
            techSpan.className = 'tech-tag';
            techSpan.textContent = tech;
            techsDiv.appendChild(techSpan);
        });

        const linksDiv = document.createElement('div');
        linksDiv.className = 'mt-auto flex justify-start space-x-4 project-links';

        if (project.liveUrl && project.liveUrl !== '#') {
            const liveLink = document.createElement('a');
            liveLink.href = project.liveUrl;
            liveLink.target = '_blank';
            liveLink.setAttribute('aria-label', `${project.title} live demo`);
            liveLink.innerHTML = '<i class="fas fa-external-link-alt fa-lg"></i>';
            linksDiv.appendChild(liveLink);
        }

        contentDiv.appendChild(titleH3);
        contentDiv.appendChild(descriptionP);
        contentDiv.appendChild(techsDiv);
        if (linksDiv.hasChildNodes()) {
            contentDiv.appendChild(linksDiv);
        }

        card.appendChild(img);
        card.appendChild(contentDiv);
        return card;
    }

    function loadProjects() {
        if (!projectGrid || !loadMoreBtn || !loadingIndicator) {
            console.warn('Project grid, load more button, or loading indicator not found.');
            return;
        }

        loadingIndicator.classList.remove('hidden'); // Show loading GIF
        loadMoreBtn.classList.add('hidden'); // Hide button while loading

        // Simulate a delay for loading (remove for production if not needed)
        setTimeout(() => {
            const nextItems = projectsData.slice(itemsCurrentlyDisplayed, itemsCurrentlyDisplayed + itemsPerLoad);
            nextItems.forEach(project => {
                const card = createProjectCard(project);
                projectGrid.appendChild(card);
            });

            itemsCurrentlyDisplayed += nextItems.length;

            loadingIndicator.classList.add('hidden'); // Hide loading GIF

            if (itemsCurrentlyDisplayed >= projectsData.length) {
                loadMoreBtn.classList.add('hidden'); // All items loaded, hide button
                document.getElementById('pagination-controls').classList.add('hidden'); // Optionally hide the whole controls div
            } else {
                loadMoreBtn.classList.remove('hidden'); // Show button again
            }
        }, 750); // 750ms delay to show the loading animation
    }

    if (projectGrid && loadMoreBtn && loadingIndicator) {
        // Initial load
        loadProjects();

        // Event listener for the load more button
        loadMoreBtn.addEventListener('click', loadProjects);
    } else {
        console.warn('Project grid container, load more button, or loading indicator with specified IDs not found.');
    }


    // --- Typing Animation for Hero Section ---
    // ... (your existing typing animation code)
    const typedTextSpan = document.getElementById("typed-output");
    const cursorSpan = document.querySelector(".typed-cursor");
    const textArray = ["A web developer.", "A problem solver.", "A lifelong learner.", "An innovator."];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            if (typedTextSpan) typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            if (cursorSpan) cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            if (typedTextSpan) typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            if (cursorSpan) cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (typedTextSpan && cursorSpan && textArray.length > 0) {
        setTimeout(type, newTextDelay + 250);
    }

    // --- Mobile Menu Toggle ---
    // ... (your existing mobile menu code)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('open');
        });
        navLinksMobile.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.remove('open');
            });
        });
    }

    // --- Smooth Scroll for Navigation Links & Active Link Highlighting ---
    // ... (your existing smooth scroll and active link code)
    const navLinks = document.querySelectorAll('nav a[href^="#"], #mobile-menu a[href^="#"], #hero a[href^="#"]');
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 70;

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const sections = document.querySelectorAll('main section[id]');
    const desktopNavItems = document.querySelectorAll('#nav-links a.nav-link');
    const mobileNavItems = document.querySelectorAll('#mobile-menu a.nav-link-mobile');

    function changeLinkState() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - headerHeight - 50) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        const updateNavItems = (items) => {
            items.forEach(link => {
                link.classList.remove('nav-link-active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('nav-link-active');
                }
            });
        };

        updateNavItems(desktopNavItems);
        updateNavItems(mobileNavItems);
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});