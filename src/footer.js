
const footerSection = document.createElement('section');
footerSection.classList.add('footer-section');

    const div1 = document.createElement('div');
        const heading3 = document.createElement('h3');
        heading3.classList.add('heading-3');
        heading3.textContent = 'Locations';

        const div11 = document.createElement('div');
        div11.classList.add('footer-items--locations');
            const div111 = document.createElement('div');
            div111.classList.add('footer-items');
                const p1 = document.createElement('p');
                p1.textContent = '123 Fake Street'
                const br1 = document.createElement('br');
                const p2 = document.createElement('p');
                p2.textContent = 'Addis Ababa'
            div111.appendChild(p1);
            div111.appendChild(p2);
            div111.appendChild(br1);
            const div112 = document.createElement('div');
            div112.classList.add('footer-items');
                const p3 = document.createElement('p');
                p3.textContent = '123 Fake Street'
                const br2 = document.createElement('br');
                const p4 = document.createElement('p');
                p4.textContent = 'Addis Ababa'
            div112.appendChild(p3);
            div112.appendChild(p4);
            div112.appendChild(br2);

        div11.appendChild(div111);
        div11.appendChild(div112);
    div1.appendChild(heading3);
    div1.appendChild(div11);
    
    const div2 = document.createElement('div');
    const heading4 = document.createElement('h3');
    heading4.classList.add('heading-3');
    heading4.textContent = 'Hours';
    
    const div21 = document.createElement('div');
    div21.classList.add('footer-items--hours');
        const div211 = document.createElement('div');
        div211.classList.add('footer-item');
            const p5 = document.createElement('p');
            p5.textContent = 'Monday - Sunday';
            const p6 = document.createElement('p');
            p6.textContent = '8 am - 11 pm';
        div211.appendChild(p5);
        div211.appendChild(p6);
    div21.appendChild(div211);

    div2.appendChild(heading4);
    div2.appendChild(div21);

    footerSection.appendChild(div1);
    footerSection.appendChild(div2);

export {footerSection};