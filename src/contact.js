
const contactSection = document.createElement('section');
contactSection.classList.add('contact-section')

        const heading2 = document.createElement('h2');
        heading2.textContent = 'Contact us';
        heading2.classList.add('heading-2');

        const form = document.createElement('form');
        form.classList.add('form');
        form.setAttribute('action', '#');

            const div1 = document.createElement('div');
                const label1 = document.createElement('label');
                label1.setAttribute('for', 'full-name');
                label1.textContent = 'Full Name';
                const input1 = document.createElement('input');
                input1.setAttribute('type','text');
                input1.setAttribute('name','full-name');
                input1.setAttribute('id','full-name');
                input1.setAttribute('placeholder','Full Name');
            div1.appendChild(label1);
            div1.appendChild(input1);

            const div2 = document.createElement('div');
                const label2 = document.createElement('label');
                label2.setAttribute('for', 'email');
                label2.textContent = 'Email';
                const input2 = document.createElement('input');
                input2.setAttribute('type','text');
                input2.setAttribute('name','email');
                input2.setAttribute('id','email');
                input2.setAttribute('placeholder','Email');
            div2.appendChild(label2);
            div2.appendChild(input2);

            const div3 = document.createElement('div');
                const label3 = document.createElement('label');
                label3.setAttribute('for', 'message');
                label3.textContent = 'Message';
                const input3 = document.createElement('textarea');
                input3.setAttribute('cols','30');
                input3.setAttribute('rows','10');
                input3.setAttribute('name','message');
                input3.setAttribute('id','message');
                input3.setAttribute('placeholder','Message');
            div3.appendChild(label3);
            div3.appendChild(input3);
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('btn'); 
        submitBtn.classList.add('btn-submit');
        submitBtn.textContent = 'Submit' 

        form.appendChild(div1);
        form.appendChild(div2);
        form.appendChild(div3);
        form.appendChild(submitBtn);

contactSection.appendChild(heading2);
contactSection.appendChild(form);


export {contactSection};