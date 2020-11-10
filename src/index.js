import {heroSection} from './hero';
import {gallerySection} from './gallery';
import {contactSection} from './contact';
import {footerSection} from './footer';


const content = document.querySelector('#content');
content.appendChild(heroSection);
content.appendChild(gallerySection);
content.appendChild(contactSection);
content.appendChild(footerSection);
