// js/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Project Data ---
    // Define your projects here. All 20 projects now have a placeholder liveUrl.
    // githubUrl property has been removed from all project objects.
    // For images, store them in an 'images/' folder in your project root,
    // e.g., 'images/project-name.webp' or 'images/project-name.jpg'
    const projectsData = [
        {
            imageSrc: '../images/xylem-support-center.jpg',
            altText: 'Avensor Customer Care Platform Screenshot',
            title: 'Avensor Customer Care',
            description: 'A comprehensive customer support platform with ticketing, live chat, and knowledge base. Built to streamline customer interactions and improve response times.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
            liveUrl: 'https://avensor.example.com' // Replace with actual link
        },
        {
            imageSrc: 'images/nectar-lms.webp',
            altText: 'Nectar LMS Screenshot',
            title: 'Nectar LMS',
            description: 'Learning Management System for creating and managing online courses. Features include video hosting, interactive quizzes, student progress tracking, and certification.',
            technologies: ['Vue.js', 'Django', 'Python', 'PostgreSQL', 'Celery'],
            liveUrl: 'https://nectar-lms.example.com' // Updated placeholder
        },
        {
            imageSrc: 'images/personal-projects-hub.webp',
            altText: 'Personal Projects Hub Screenshot',
            title: 'Personal Projects Hub',
            description: 'A curated collection of my smaller personal projects, experiments, and code snippets. Showcases proficiency in various technologies and creative coding ideas.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'APIs', 'Parcel'],
            liveUrl: 'https://projects.example.dev'
        },
        {
            imageSrc: 'images/bidvls-platform.webp',
            altText: 'BIDVLS Platform Screenshot',
            title: 'BIDVLS Platform',
            description: 'An innovative B2B platform for [describe BIDVLS purpose clearly, e.g., supply chain management]. Focused on user experience, data analytics, and robust backend architecture.',
            technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Firebase', 'Stripe API'],
            liveUrl: 'https://bidvls.example.com'
        },
        {
            imageSrc: 'images/project-5.webp',
            altText: 'Project 5 Screenshot',
            title: 'E-commerce Storefront',
            description: 'A fully responsive e-commerce website with product listings, cart functionality, and a secure checkout process. Integrated with a payment gateway.',
            technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
            liveUrl: 'https://shop.example.com'
        },
        {
            imageSrc: 'images/project-6.webp',
            altText: 'Project 6 Screenshot',
            title: 'Task Management App',
            description: 'A collaborative task management application allowing users to create projects, assign tasks, set deadlines, and track progress with a Kanban board view.',
            technologies: ['Angular', 'TypeScript', 'Firebase Realtime DB', 'Tailwind CSS'],
            liveUrl: 'https://tasks.example.org'
        },
        {
            imageSrc: 'images/project-7.webp',
            altText: 'Project 7 Screenshot',
            title: 'Weather Dashboard',
            description: 'A sleek weather dashboard that provides current weather conditions and forecasts for multiple locations using a third-party weather API.',
            technologies: ['JavaScript (Vanilla)', 'OpenWeatherMap API', 'Chart.js'],
            liveUrl: 'https://weather.example.io'
        },
        {
            imageSrc: 'images/project-8.webp',
            altText: 'Project 8 Screenshot',
            title: 'Portfolio API',
            description: 'A RESTful API to serve data for this portfolio website and other personal projects. Built with Node.js and Express, deployed on a cloud platform.',
            technologies: ['Node.js', 'Express', 'JWT', 'Heroku/Vercel'],
            liveUrl: 'https://api.example.dev/portfolio'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+9',
            altText: 'Project 9 Placeholder',
            title: 'Project Title 9',
            description: 'Detailed description for project 9. Explain the purpose, challenges, and solutions implemented. Highlight key features and technologies used.',
            technologies: ['Tech X', 'Tech Y', 'Tech Z'],
            liveUrl: 'https://project-link-9.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+10',
            altText: 'Project 10 Placeholder',
            title: 'Project Title 10',
            description: 'Detailed description for project 10. Explain the purpose, challenges, and solutions implemented. Highlight key features and technologies used.',
            technologies: ['Svelte', 'Rust', 'WebAssembly'],
            liveUrl: 'https://project-link-10.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+11',
            altText: 'Project 11 Placeholder',
            title: 'Project Title 11',
            description: 'This is project 11. Customize its details.',
            technologies: ['Tech A', 'Tech B'],
            liveUrl: 'https://project-link-11.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+12',
            altText: 'Project 12 Placeholder',
            title: 'Project Title 12',
            description: 'This is project 12. Customize its details.',
            technologies: ['Tech C', 'Tech D', 'Tech E'],
            liveUrl: 'https://project-link-12.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+13',
            altText: 'Project 13 Placeholder',
            title: 'Project Title 13',
            description: 'This is project 13. Customize its details.',
            technologies: ['Python', 'Flask', 'SQLAlchemy'],
            liveUrl: 'https://project-link-13.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+14',
            altText: 'Project 14 Placeholder',
            title: 'Project Title 14',
            description: 'This is project 14. Customize its details.',
            technologies: ['Java', 'Spring Boot', 'React'],
            liveUrl: 'https://project-link-14.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+15',
            altText: 'Project 15 Placeholder',
            title: 'Project Title 15',
            description: 'This is project 15. Customize its details.',
            technologies: ['Swift', 'iOS SDK'],
            liveUrl: 'https://project-link-15.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+16',
            altText: 'Project 16 Placeholder',
            title: 'Project Title 16',
            description: 'This is project 16. Customize its details.',
            technologies: ['Kotlin', 'Android SDK', 'Jetpack Compose'],
            liveUrl: 'https://project-link-16.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+17',
            altText: 'Project 17 Placeholder',
            title: 'Project Title 17',
            description: 'This is project 17. Customize its details.',
            technologies: ['C#', '.NET', 'Azure'],
            liveUrl: 'https://project-link-17.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+18',
            altText: 'Project 18 Placeholder',
            title: 'Project Title 18',
            description: 'This is project 18. Customize its details.',
            technologies: ['Go', 'Docker', 'Kubernetes'],
            liveUrl: 'https://project-link-18.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+19',
            altText: 'Project 19 Placeholder',
            title: 'Project Title 19',
            description: 'This is project 19. Customize its details.',
            technologies: ['PHP', 'Laravel', 'MySQL'],
            liveUrl: 'https://project-link-19.example.com'
        },
        {
            imageSrc: 'https://placehold.co/600x400/112240/334155?text=Project+20',
            altText: 'Project 20 Placeholder',
            title: 'Project Title 20',
            description: 'This is project 20. Customize its details. You can add even more projects by simply extending this array.',
            technologies: ['Ruby on Rails', 'PostgreSQL', 'Heroku'],
            liveUrl: 'https://project-link-20.example.com'
        }
    ];

    // --- Function to Create and Append Project Cards ---
    const projectGrid = document.getElementById('project-grid');

    if (projectGrid) {
        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card rounded-lg shadow-xl overflow-hidden flex flex-col'; // Tailwind classes

            // Image
            const img = document.createElement('img');
            img.src = project.imageSrc;
            img.alt = project.altText || project.title; // Fallback alt text
            img.className = 'w-full h-48 object-cover';
            // Fallback image if the primary one fails to load
            img.onerror = function() {
                this.onerror = null; // Prevent infinite loop if placeholder also fails
                this.src = `https://placehold.co/600x400/112240/334155?text=${encodeURIComponent(project.title.substring(0,15))}`;
                this.alt = `Placeholder image for ${project.title}`;
            };

            // Content container
            const contentDiv = document.createElement('div');
            contentDiv.className = 'p-6 flex flex-col flex-grow'; // Tailwind classes

            // Title
            const titleH3 = document.createElement('h3');
            titleH3.className = 'text-xl font-semibold text-slate-100 mb-2'; // Tailwind classes
            titleH3.textContent = project.title;

            // Description
            const descriptionP = document.createElement('p');
            descriptionP.className = 'text-slate-400 text-sm leading-relaxed mb-4 flex-grow'; // Tailwind classes
            descriptionP.textContent = project.description;

            // Technologies
            const techsDiv = document.createElement('div');
            techsDiv.className = 'mb-4'; // Tailwind classes
            project.technologies.forEach(tech => {
                const techSpan = document.createElement('span');
                techSpan.className = 'tech-tag'; // Custom class from style.css
                techSpan.textContent = tech;
                techsDiv.appendChild(techSpan);
            });

            // Links (Live URL only)
            const linksDiv = document.createElement('div');
            // If there's only one link, 'justify-start' is fine. 'space-x-4' won't apply to a single child.
            linksDiv.className = 'mt-auto flex justify-start space-x-4 project-links'; 

            // Check for Live URL
            if (project.liveUrl && project.liveUrl !== '#') {
                const liveLink = document.createElement('a');
                liveLink.href = project.liveUrl;
                liveLink.target = '_blank';
                liveLink.setAttribute('aria-label', `${project.title} live demo`);
                liveLink.innerHTML = '<i class="fas fa-external-link-alt fa-lg"></i>'; // Font Awesome icon for external link
                linksDiv.appendChild(liveLink);
            }

            // Assemble card
            contentDiv.appendChild(titleH3);
            contentDiv.appendChild(descriptionP);
            contentDiv.appendChild(techsDiv);
            // Only append linksDiv if it actually contains a link
            if (linksDiv.hasChildNodes()) { 
                contentDiv.appendChild(linksDiv);
            }
            
            card.appendChild(img);
            card.appendChild(contentDiv);

            projectGrid.appendChild(card);
        });
    } else {
        console.warn('Project grid container with ID "project-grid" not found.');
    }


    // --- Typing Animation for Hero Section ---
    const typedTextSpan = document.getElementById("typed-output");
    const cursorSpan = document.querySelector(".typed-cursor");
    // Text options for typing animation
    const textArray = ["A web developer.", "A problem solver.", "A lifelong learner.", "An innovator."];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay before starting to type next text
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
            setTimeout(type, typingDelay + 1100); // Delay before typing new text
        }
    }

    // Start typing animation if elements exist
    if (typedTextSpan && cursorSpan && textArray.length > 0) {
        setTimeout(type, newTextDelay + 250);
    }


    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('open'); // For animating the hamburger icon
        });
        // Close mobile menu when a link is clicked
        navLinksMobile.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.classList.remove('open');
            });
        });
    }


    // --- Smooth Scroll for Navigation Links & Active Link Highlighting ---
    const navLinks = document.querySelectorAll('nav a[href^="#"], #mobile-menu a[href^="#"], #hero a[href^="#"]');
    const header = document.getElementById('header');
    // Dynamically get header height, or fallback.
    // Ensure header is not null before accessing offsetHeight.
    const headerHeight = header ? header.offsetHeight : 70;


    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                // Adjust scroll position to account for the fixed header.
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('main section[id]'); // Target sections within main
    const desktopNavItems = document.querySelectorAll('#nav-links a.nav-link');
    const mobileNavItems = document.querySelectorAll('#mobile-menu a.nav-link-mobile');

    function changeLinkState() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Check if section is in viewport, considering header height and a small offset
            if (window.pageYOffset >= sectionTop - headerHeight - 50) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        // Function to update active class for a list of nav items
        const updateNavItems = (items) => {
            items.forEach(link => {
                link.classList.remove('nav-link-active');
                // Check if the link's href matches the current section ID
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('nav-link-active');
                }
            });
        };

        updateNavItems(desktopNavItems);
        updateNavItems(mobileNavItems);
    }

    // Initial call to set active link on page load
    changeLinkState();
    // Add scroll event listener
    window.addEventListener('scroll', changeLinkState);

    console.log("Portfolio script loaded and initialized. GitHub URLs removed from project data.");
});

