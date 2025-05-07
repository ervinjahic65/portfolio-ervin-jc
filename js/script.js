// Simple script to generate placeholder project cards

const projectContainer = document.querySelector('#projects .grid');
const baseProjectCount = 4; // Number of manually defined cards above
const totalProjects = 20;

for (let i = baseProjectCount + 1; i <= totalProjects; i++) {
    const card = document.createElement('div');
    card.className = 'project-card rounded-lg shadow-xl overflow-hidden flex flex-col';
    card.innerHTML = `
        <img src="https://placehold.co/600x400/112240/334155?text=Project+${i}" alt="Project ${i} Screenshot" class="w-full h-48 object-cover">
        <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold text-[#ccd6f6] mb-2">Project Title ${i}</h3>
            <p class="text-[#8892b0] text-sm leading-relaxed mb-4 flex-grow">
                This is a placeholder description for project ${i}. It showcases my ability to work with various web technologies to deliver outstanding results. More details about the project's objectives, challenges, and outcomes will be added here.
            </p>
            <div class="mb-4">
                <span class="inline-block bg-[#1e293b] text-[#64ffda] text-xs font-mono px-2 py-1 rounded-full mr-2 mb-2">Tech A</span>
                <span class="inline-block bg-[#1e293b] text-[#64ffda] text-xs font-mono px-2 py-1 rounded-full mr-2 mb-2">Tech B</span>
                <span class="inline-block bg-[#1e293b] text-[#64ffda] text-xs font-mono px-2 py-1 rounded-full mr-2 mb-2">Tech C</span>
            </div>
            <div class="mt-auto flex justify-start space-x-3">
                <a href="#" target="_blank" class="text-[#64ffda] hover:text-white transition-colors"><i class="fab fa-github fa-lg"></i></a>
                <a href="#" target="_blank" class="text-[#64ffda] hover:text-white transition-colors"><i class="fas fa-external-link-alt fa-lg"></i></a>
            </div>
        </div>
    `;
    if (projectContainer) {
            projectContainer.appendChild(card);
    }
}

// JavaScript for interactive elements

// Typing animation for hero section
const typedTextSpan = document.getElementById("typed-output");
const cursorSpan = document.querySelector(".typed-cursor");
const textArray = ["a web developer.", "a problem solver.", "a lifelong learner."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');


if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenuButton.classList.toggle('open');
    });
    // Close mobile menu when a link is clicked
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.classList.remove('open');
        });
    });
}


// Smooth scroll for navigation links & active link highlighting
const navLinks = document.querySelectorAll('nav a[href^="#"], #mobile-menu a[href^="#"], #hero a[href^="#"]');
const header = document.getElementById('header');
const headerHeight = header ? header.offsetHeight : 70; // Fallback header height

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight; // Adjust for fixed header

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const desktopNavItems = document.querySelectorAll('#nav-links a.nav-link');
const mobileNavItems = document.querySelectorAll('#mobile-menu a.nav-link-mobile');


function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + headerHeight + 50 < sections[index].offsetTop) {} // 50 is an offset
    
    desktopNavItems.forEach((link) => link.classList.remove('nav-link-active'));
    mobileNavItems.forEach((link) => link.classList.remove('nav-link-active')); // Assuming same class for active state

    // Check if the corresponding link exists before trying to add class
    if (desktopNavItems[index]) {
            desktopNavItems[index].classList.add('nav-link-active');
    }
    if (mobileNavItems[index]) {
            mobileNavItems[index].classList.add('nav-link-active');
    }
}

// Initial call to set active link on page load (if not at top)
if (window.scrollY > 0) {
    changeLinkState();
}
// Add scroll event listener
window.addEventListener('scroll', changeLinkState);

// Add placeholder project cards (if not already done by inline script)
// This is a fallback in case the inline script in the HTML doesn't run or is removed.
// It's generally better to have one source of truth for this.
const projectContainerCheck = document.querySelector('#projects .grid');
if (projectContainerCheck && projectContainerCheck.children.length < 5) { // Check if cards were already added
    const baseProjectCountJS = 4; // Assuming 4 are hardcoded in HTML
    const totalProjectsJS = 20;
    for (let i = baseProjectCountJS + 1; i <= totalProjectsJS; i++) {
        const card = document.createElement('div');
        card.className = 'project-card rounded-lg shadow-xl overflow-hidden flex flex-col';
        card.innerHTML = `
            <img src="https://placehold.co/600x400/112240/334155?text=Project+${i}" alt="Project ${i} Screenshot" class="w-full h-48 object-cover">
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-semibold text-[#ccd6f6] mb-2">Project Title ${i} (JS)</h3>
                <p class="text-[#8892b0] text-sm leading-relaxed mb-4 flex-grow">
                    This is a placeholder description for project ${i}, generated by JavaScript. It showcases my ability to work with various web technologies.
                </p>
                <div class="mb-4">
                    <span class="inline-block bg-[#1e293b] text-[#64ffda] text-xs font-mono px-2 py-1 rounded-full mr-2 mb-2">JS Tech A</span>
                    <span class="inline-block bg-[#1e293b] text-[#64ffda] text-xs font-mono px-2 py-1 rounded-full mr-2 mb-2">JS Tech B</span>
                </div>
                <div class="mt-auto flex justify-start space-x-3">
                    <a href="#" target="_blank" class="text-[#64ffda] hover:text-white transition-colors"><i class="fab fa-github fa-lg"></i></a>
                    <a href="#" target="_blank" class="text-[#64ffda] hover:text-white transition-colors"><i class="fas fa-external-link-alt fa-lg"></i></a>
                </div>
            </div>
        `;
        projectContainerCheck.appendChild(card);
    }
}