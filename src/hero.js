
const heroSection = document.createElement('section');
    heroSection.classList.add('hero-section');
    heroSection.setAttribute('id', 'hero');
    
        const nav = document.createElement('nav');
        nav.classList.add('nav');
            const contactLink = document.createElement('a');
            contactLink.setAttribute('href', '#');
            contactLink.textContent = 'Contact';

            const homeLink = document.createElement('a');
            homeLink.setAttribute('href', '#');
            homeLink.textContent = 'Home';
            const galleryLink = document.createElement('a');
            galleryLink.setAttribute('href', '#');
            galleryLink.textContent = 'Gallery';
        nav.appendChild(contactLink);
        nav.appendChild(homeLink);
        nav.appendChild(galleryLink);

        const header1 = document.createElement('h1');
        header1.textContent = 'EAT DRINK VISIT';
        header1.classList.add('heading-1');
    
    heroSection.appendChild(header1);
    heroSection.appendChild(nav);


export {heroSection};