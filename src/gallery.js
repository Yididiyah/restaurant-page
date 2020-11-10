import {breakfast} from './breakfast';
import {lunch} from './lunch';
import {dinner} from './dinner';


const gallerySection = document.createElement('section');
gallerySection.classList.add('gallery-section');

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
        const tab1 = document.createElement('button');
        tab1.classList.add('tab');
        tab1.classList.add('tab-1');
        tab1.classList.add('selected');
        tab1.textContent = 'Breakfast';
        const tab2 = document.createElement('button');
        tab2.classList.add('tab');
        tab2.classList.add('tab-2');
        tab2.textContent = 'Lunch';
        const tab3 = document.createElement('button');
        tab3.classList.add('tab');
        tab3.classList.add('tab-3');
        tab3.textContent = 'Dinner';
    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);

    let galleryImagesDOM = breakfast();

    const breakfastDOM = breakfast();
    const lunchDOM = lunch();
    const dinnerDOM = dinner();
    const changeGallery = (e) => {
        switch (e.target.textContent){
            case 'Breakfast':
                galleryImagesDOM.replaceWith(breakfastDOM);
                galleryImagesDOM = breakfastDOM;
                tab1.classList.contains('selected') ? null : tab1.classList.add('selected');
                tab2.classList.contains('selected') ? tab2.classList.remove('selected') : null;
                tab3.classList.contains('selected') ? tab3.classList.remove('selected') : null;
                break;
            case 'Lunch':
                galleryImagesDOM.replaceWith(lunchDOM);
                galleryImagesDOM = lunchDOM;
                tab2.classList.contains('selected') ? null : tab2.classList.add('selected');
                tab1.classList.contains('selected') ? tab1.classList.remove('selected') : null;
                tab3.classList.contains('selected') ? tab3.classList.remove('selected') : null;
                break;
            case 'Dinner':
                galleryImagesDOM.replaceWith(dinnerDOM);
                galleryImagesDOM = dinnerDOM;
                tab3.classList.contains('selected') ? null : tab3.classList.add('selected');
                tab1.classList.contains('selected') ? tab2.classList.remove('selected') : null;
                tab2.classList.contains('selected') ? tab2.classList.remove('selected') : null;
                break;
        }
    }
    tab1.addEventListener('click', changeGallery);
    tab2.addEventListener('click', changeGallery);
    tab3.addEventListener('click', changeGallery);
    

gallerySection.appendChild(tabs);
gallerySection.appendChild(galleryImagesDOM);


export {gallerySection};