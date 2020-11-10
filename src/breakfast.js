const breakfast = () => {
    const gallery = document.createElement('div');
    gallery.classList.add('gallery-images');
    
    const img1 = document.createElement('img');
    img1.classList.add('gallery-img');
    img1.classList.add('img-1');
    img1.src = './img/food-1.jpg';
    img1.setAttribute('alt', 'Food Image');
    const img2 = document.createElement('img');
    img2.classList.add('gallery-img');
    img2.classList.add('img-2');
    img2.src = './img/food-2.jpg';
    img2.setAttribute('alt', 'Food Image');
    const img3 = document.createElement('img');
    img3.classList.add('gallery-img');
    img3.classList.add('img-3');
    img3.src = './img/food-3.jpg';
    img3.setAttribute('alt', 'Food Image');
    const img4 = document.createElement('img');
    img4.classList.add('gallery-img');
    img4.classList.add('img-4');
    img4.src = './img/food-4.jpg';
    img4.setAttribute('alt', 'Food Image');
    const img5 = document.createElement('img');
    img5.classList.add('gallery-img');
    img5.classList.add('img-5');
    img5.src = './img/food-5.jpg';
    img5.setAttribute('alt', 'Food Image');
    const img6 = document.createElement('img');
    img6.classList.add('gallery-img');
    img6.classList.add('img-6');
    img6.src = './img/food-6.jpg';
    img6.setAttribute('alt', 'Food Image');

    gallery.appendChild(img1);
    gallery.appendChild(img2);
    gallery.appendChild(img3);
    gallery.appendChild(img4);
    gallery.appendChild(img5);
    gallery.appendChild(img6);

    return gallery;
}

export {breakfast};

