/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breakfast.js":
/*!**************************!*\
  !*** ./src/breakfast.js ***!
  \**************************/
/*! namespace exports */
/*! export breakfast [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakfast": () => /* binding */ breakfast
/* harmony export */ });
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





/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! namespace exports */
/*! export contactSection [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactSection": () => /* binding */ contactSection
/* harmony export */ });

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




/***/ }),

/***/ "./src/dinner.js":
/*!***********************!*\
  !*** ./src/dinner.js ***!
  \***********************/
/*! namespace exports */
/*! export dinner [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dinner": () => /* binding */ dinner
/* harmony export */ });
const dinner = () => {
    const gallery = document.createElement('div');
    gallery.classList.add('gallery-images');
    
    const img3 = document.createElement('img');
    img3.classList.add('gallery-img');
    img3.classList.add('img-3');
    img3.src = './img/dinner-1.jpg';
    img3.setAttribute('alt', 'Food Image');
    const img2 = document.createElement('img');
    img2.classList.add('gallery-img');
    img2.classList.add('img-2');
    img2.src = './img/dinner-2.jpg';
    img2.setAttribute('alt', 'Food Image');
    const img1 = document.createElement('img');
    img1.classList.add('gallery-img');
    img1.classList.add('img-1');
    img1.src = './img/dinner-3.jpg';
    img1.setAttribute('alt', 'Food Image');
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





/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! namespace exports */
/*! export footerSection [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerSection": () => /* binding */ footerSection
/* harmony export */ });

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



/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/*! namespace exports */
/*! export gallerySection [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gallerySection": () => /* binding */ gallerySection
/* harmony export */ });
/* harmony import */ var _breakfast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast */ "./src/breakfast.js");
/* harmony import */ var _lunch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lunch */ "./src/lunch.js");
/* harmony import */ var _dinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dinner */ "./src/dinner.js");
;




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

    let galleryImagesDOM = (0,_breakfast__WEBPACK_IMPORTED_MODULE_0__.breakfast)();

    const breakfastDOM = (0,_breakfast__WEBPACK_IMPORTED_MODULE_0__.breakfast)();
    const lunchDOM = (0,_lunch__WEBPACK_IMPORTED_MODULE_1__.lunch)();
    const dinnerDOM = (0,_dinner__WEBPACK_IMPORTED_MODULE_2__.dinner)();
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




/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/*! namespace exports */
/*! export heroSection [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heroSection": () => /* binding */ heroSection
/* harmony export */ });

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




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery */ "./src/gallery.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
;





const content = document.querySelector('#content');
content.appendChild(_hero__WEBPACK_IMPORTED_MODULE_0__.heroSection);
content.appendChild(_gallery__WEBPACK_IMPORTED_MODULE_1__.gallerySection);
content.appendChild(_contact__WEBPACK_IMPORTED_MODULE_2__.contactSection);
content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_3__.footerSection);


/***/ }),

/***/ "./src/lunch.js":
/*!**********************!*\
  !*** ./src/lunch.js ***!
  \**********************/
/*! namespace exports */
/*! export lunch [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lunch": () => /* binding */ lunch
/* harmony export */ });
const lunch = () => {
    const gallery = document.createElement('div');
    gallery.classList.add('gallery-images');
    
    const img2 = document.createElement('img');
    img2.classList.add('gallery-img');
    img2.classList.add('img-2');
    img2.src = './img/lunch-1.jpg';
    img2.setAttribute('alt', 'Food Image');
    const img1 = document.createElement('img');
    img1.classList.add('gallery-img');
    img1.classList.add('img-1');
    img1.src = './img/lunch-2.jpg';
    img1.setAttribute('alt', 'Food Image');
    const img3 = document.createElement('img');
    img3.classList.add('gallery-img');
    img3.classList.add('img-3');
    img3.src = './img/lunch-3.jpg';
    img3.setAttribute('alt', 'Food Image');
    const img4 = document.createElement('img');
    img4.classList.add('gallery-img');
    img4.classList.add('img-4');
    img4.src = './img/lunch-4.jpg';
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





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYnJlYWtmYXN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kaW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2x1bmNoLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREEsQ0FBc0M7QUFDUjtBQUNFOzs7QUFHaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLHFEQUFTOztBQUVwQyx5QkFBeUIscURBQVM7QUFDbEMscUJBQXFCLDZDQUFLO0FBQzFCLHNCQUFzQiwrQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSxDQUFtQztBQUNNO0FBQ0E7QUFDRjs7O0FBR3ZDO0FBQ0Esb0JBQW9CLDhDQUFXO0FBQy9CLG9CQUFvQixvREFBYztBQUNsQyxvQkFBb0Isb0RBQWM7QUFDbEMsb0JBQW9CLGtEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7Ozs7Ozs7O1VDN0NmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnJlYWtmYXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1hZ2VzJyk7XG4gICAgXG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2ltZy0xJyk7XG4gICAgaW1nMS5zcmMgPSAnLi9pbWcvZm9vZC0xLmpwZyc7XG4gICAgaW1nMS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2ltZy0yJyk7XG4gICAgaW1nMi5zcmMgPSAnLi9pbWcvZm9vZC0yLmpwZyc7XG4gICAgaW1nMi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzMuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2ltZy0zJyk7XG4gICAgaW1nMy5zcmMgPSAnLi9pbWcvZm9vZC0zLmpwZyc7XG4gICAgaW1nMy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG4gICAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWc0LmNsYXNzTGlzdC5hZGQoJ2ltZy00Jyk7XG4gICAgaW1nNC5zcmMgPSAnLi9pbWcvZm9vZC00LmpwZyc7XG4gICAgaW1nNC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG4gICAgY29uc3QgaW1nNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzUuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWc1LmNsYXNzTGlzdC5hZGQoJ2ltZy01Jyk7XG4gICAgaW1nNS5zcmMgPSAnLi9pbWcvZm9vZC01LmpwZyc7XG4gICAgaW1nNS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG4gICAgY29uc3QgaW1nNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzYuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWc2LmNsYXNzTGlzdC5hZGQoJ2ltZy02Jyk7XG4gICAgaW1nNi5zcmMgPSAnLi9pbWcvZm9vZC02LmpwZyc7XG4gICAgaW1nNi5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG5cbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZzEpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1nMik7XG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChpbWczKTtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZzQpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1nNSk7XG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChpbWc2KTtcblxuICAgIHJldHVybiBnYWxsZXJ5O1xufVxuXG5leHBvcnQge2JyZWFrZmFzdH07XG5cbiIsIlxuY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXNlY3Rpb24nKVxuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGluZzIudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG4gICAgICAgIGhlYWRpbmcyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmctMicpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcblxuICAgICAgICAgICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwxLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Z1bGwtbmFtZScpO1xuICAgICAgICAgICAgICAgIGxhYmVsMS50ZXh0Q29udGVudCA9ICdGdWxsIE5hbWUnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCduYW1lJywnZnVsbC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgnaWQnLCdmdWxsLW5hbWUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dDEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Z1bGwgTmFtZScpO1xuICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZChsYWJlbDEpO1xuICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZChpbnB1dDEpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbDIuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbDIudGV4dENvbnRlbnQgPSAnRW1haWwnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXQyLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dDIuc2V0QXR0cmlidXRlKCduYW1lJywnZW1haWwnKTtcbiAgICAgICAgICAgICAgICBpbnB1dDIuc2V0QXR0cmlidXRlKCdpZCcsJ2VtYWlsJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdFbWFpbCcpO1xuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChsYWJlbDIpO1xuICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChpbnB1dDIpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYWJlbDMuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpO1xuICAgICAgICAgICAgICAgIGxhYmVsMy50ZXh0Q29udGVudCA9ICdNZXNzYWdlJztcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgIGlucHV0My5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCczMCcpO1xuICAgICAgICAgICAgICAgIGlucHV0My5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCcxMCcpO1xuICAgICAgICAgICAgICAgIGlucHV0My5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdtZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQzLnNldEF0dHJpYnV0ZSgnaWQnLCdtZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQzLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdNZXNzYWdlJyk7XG4gICAgICAgICAgICBkaXYzLmFwcGVuZENoaWxkKGxhYmVsMyk7XG4gICAgICAgICAgICBkaXYzLmFwcGVuZENoaWxkKGlucHV0Myk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7IFxuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuLXN1Ym1pdCcpO1xuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JyBcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRpdjMpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbmNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRpbmcyKTtcbmNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5cbmV4cG9ydCB7Y29udGFjdFNlY3Rpb259OyIsImNvbnN0IGRpbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FsbGVyeS5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWltYWdlcycpO1xuICAgIFxuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWczLmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1nJyk7XG4gICAgaW1nMy5jbGFzc0xpc3QuYWRkKCdpbWctMycpO1xuICAgIGltZzMuc3JjID0gJy4vaW1nL2Rpbm5lci0xLmpwZyc7XG4gICAgaW1nMy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2ltZy0yJyk7XG4gICAgaW1nMi5zcmMgPSAnLi9pbWcvZGlubmVyLTIuanBnJztcbiAgICBpbWcyLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0Zvb2QgSW1hZ2UnKTtcbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWltZycpO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnaW1nLTEnKTtcbiAgICBpbWcxLnNyYyA9ICcuL2ltZy9kaW5uZXItMy5qcGcnO1xuICAgIGltZzEuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuICAgIGNvbnN0IGltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWc0LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1nJyk7XG4gICAgaW1nNC5jbGFzc0xpc3QuYWRkKCdpbWctNCcpO1xuICAgIGltZzQuc3JjID0gJy4vaW1nL2Zvb2QtNC5qcGcnO1xuICAgIGltZzQuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuICAgIGNvbnN0IGltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWc1LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1nJyk7XG4gICAgaW1nNS5jbGFzc0xpc3QuYWRkKCdpbWctNScpO1xuICAgIGltZzUuc3JjID0gJy4vaW1nL2Zvb2QtNS5qcGcnO1xuICAgIGltZzUuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuICAgIGNvbnN0IGltZzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWc2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1nJyk7XG4gICAgaW1nNi5jbGFzc0xpc3QuYWRkKCdpbWctNicpO1xuICAgIGltZzYuc3JjID0gJy4vaW1nL2Zvb2QtNi5qcGcnO1xuICAgIGltZzYuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuXG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZzIpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1nMyk7XG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChpbWc0KTtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZzUpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1nNik7XG5cbiAgICByZXR1cm4gZ2FsbGVyeTtcbn1cblxuZXhwb3J0IHtkaW5uZXJ9O1xuXG4iLCJcbmNvbnN0IGZvb3RlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5mb290ZXJTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1zZWN0aW9uJyk7XG5cbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRpbmczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaGVhZGluZzMuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy0zJyk7XG4gICAgICAgIGhlYWRpbmczLnRleHRDb250ZW50ID0gJ0xvY2F0aW9ucyc7XG5cbiAgICAgICAgY29uc3QgZGl2MTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2MTEuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWl0ZW1zLS1sb2NhdGlvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjExMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2MTExLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pdGVtcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHAxLnRleHRDb250ZW50ID0gJzEyMyBGYWtlIFN0cmVldCdcbiAgICAgICAgICAgICAgICBjb25zdCBicjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHAyLnRleHRDb250ZW50ID0gJ0FkZGlzIEFiYWJhJ1xuICAgICAgICAgICAgZGl2MTExLmFwcGVuZENoaWxkKHAxKTtcbiAgICAgICAgICAgIGRpdjExMS5hcHBlbmRDaGlsZChwMik7XG4gICAgICAgICAgICBkaXYxMTEuYXBwZW5kQ2hpbGQoYnIxKTtcbiAgICAgICAgICAgIGNvbnN0IGRpdjExMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGl2MTEyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pdGVtcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHAzLnRleHRDb250ZW50ID0gJzEyMyBGYWtlIFN0cmVldCdcbiAgICAgICAgICAgICAgICBjb25zdCBicjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHA0LnRleHRDb250ZW50ID0gJ0FkZGlzIEFiYWJhJ1xuICAgICAgICAgICAgZGl2MTEyLmFwcGVuZENoaWxkKHAzKTtcbiAgICAgICAgICAgIGRpdjExMi5hcHBlbmRDaGlsZChwNCk7XG4gICAgICAgICAgICBkaXYxMTIuYXBwZW5kQ2hpbGQoYnIyKTtcblxuICAgICAgICBkaXYxMS5hcHBlbmRDaGlsZChkaXYxMTEpO1xuICAgICAgICBkaXYxMS5hcHBlbmRDaGlsZChkaXYxMTIpO1xuICAgIGRpdjEuYXBwZW5kQ2hpbGQoaGVhZGluZzMpO1xuICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2MTEpO1xuICAgIFxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkaW5nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaGVhZGluZzQuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy0zJyk7XG4gICAgaGVhZGluZzQudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICAgIFxuICAgIGNvbnN0IGRpdjIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2MjEuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWl0ZW1zLS1ob3VycycpO1xuICAgICAgICBjb25zdCBkaXYyMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2MjExLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHA1LnRleHRDb250ZW50ID0gJ01vbmRheSAtIFN1bmRheSc7XG4gICAgICAgICAgICBjb25zdCBwNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHA2LnRleHRDb250ZW50ID0gJzggYW0gLSAxMSBwbSc7XG4gICAgICAgIGRpdjIxMS5hcHBlbmRDaGlsZChwNSk7XG4gICAgICAgIGRpdjIxMS5hcHBlbmRDaGlsZChwNik7XG4gICAgZGl2MjEuYXBwZW5kQ2hpbGQoZGl2MjExKTtcblxuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaGVhZGluZzQpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoZGl2MjEpO1xuXG4gICAgZm9vdGVyU2VjdGlvbi5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICBmb290ZXJTZWN0aW9uLmFwcGVuZENoaWxkKGRpdjIpO1xuXG5leHBvcnQge2Zvb3RlclNlY3Rpb259OyIsImltcG9ydCB7YnJlYWtmYXN0fSBmcm9tICcuL2JyZWFrZmFzdCc7XG5pbXBvcnQge2x1bmNofSBmcm9tICcuL2x1bmNoJztcbmltcG9ydCB7ZGlubmVyfSBmcm9tICcuL2Rpbm5lcic7XG5cblxuY29uc3QgZ2FsbGVyeVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5nYWxsZXJ5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LXNlY3Rpb24nKTtcblxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgICAgICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YWIxLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgICAgICB0YWIxLmNsYXNzTGlzdC5hZGQoJ3RhYi0xJyk7XG4gICAgICAgIHRhYjEuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgdGFiMS50ZXh0Q29udGVudCA9ICdCcmVha2Zhc3QnO1xuICAgICAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhYjIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgIHRhYjIuY2xhc3NMaXN0LmFkZCgndGFiLTInKTtcbiAgICAgICAgdGFiMi50ZXh0Q29udGVudCA9ICdMdW5jaCc7XG4gICAgICAgIGNvbnN0IHRhYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFiMy5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgdGFiMy5jbGFzc0xpc3QuYWRkKCd0YWItMycpO1xuICAgICAgICB0YWIzLnRleHRDb250ZW50ID0gJ0Rpbm5lcic7XG4gICAgdGFicy5hcHBlbmRDaGlsZCh0YWIxKTtcbiAgICB0YWJzLmFwcGVuZENoaWxkKHRhYjIpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQodGFiMyk7XG5cbiAgICBsZXQgZ2FsbGVyeUltYWdlc0RPTSA9IGJyZWFrZmFzdCgpO1xuXG4gICAgY29uc3QgYnJlYWtmYXN0RE9NID0gYnJlYWtmYXN0KCk7XG4gICAgY29uc3QgbHVuY2hET00gPSBsdW5jaCgpO1xuICAgIGNvbnN0IGRpbm5lckRPTSA9IGRpbm5lcigpO1xuICAgIGNvbnN0IGNoYW5nZUdhbGxlcnkgPSAoZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LnRleHRDb250ZW50KXtcbiAgICAgICAgICAgIGNhc2UgJ0JyZWFrZmFzdCc6XG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlc0RPTS5yZXBsYWNlV2l0aChicmVha2Zhc3RET00pO1xuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWFnZXNET00gPSBicmVha2Zhc3RET007XG4gICAgICAgICAgICAgICAgdGFiMS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykgPyBudWxsIDogdGFiMS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRhYjIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpID8gdGFiMi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpIDogbnVsbDtcbiAgICAgICAgICAgICAgICB0YWIzLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSA/IHRhYjMuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdMdW5jaCc6XG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlc0RPTS5yZXBsYWNlV2l0aChsdW5jaERPTSk7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlc0RPTSA9IGx1bmNoRE9NO1xuICAgICAgICAgICAgICAgIHRhYjIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpID8gbnVsbCA6IHRhYjIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0YWIxLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSA/IHRhYjEuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdGFiMy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykgPyB0YWIzLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRGlubmVyJzpcbiAgICAgICAgICAgICAgICBnYWxsZXJ5SW1hZ2VzRE9NLnJlcGxhY2VXaXRoKGRpbm5lckRPTSk7XG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltYWdlc0RPTSA9IGRpbm5lckRPTTtcbiAgICAgICAgICAgICAgICB0YWIzLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSA/IG51bGwgOiB0YWIzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGFiMS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykgPyB0YWIyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykgOiBudWxsO1xuICAgICAgICAgICAgICAgIHRhYjIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpID8gdGFiMi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0YWIxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlR2FsbGVyeSk7XG4gICAgdGFiMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUdhbGxlcnkpO1xuICAgIHRhYjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VHYWxsZXJ5KTtcbiAgICBcblxuZ2FsbGVyeVNlY3Rpb24uYXBwZW5kQ2hpbGQodGFicyk7XG5nYWxsZXJ5U2VjdGlvbi5hcHBlbmRDaGlsZChnYWxsZXJ5SW1hZ2VzRE9NKTtcblxuXG5leHBvcnQge2dhbGxlcnlTZWN0aW9ufTsiLCJcbmNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hlcm8tc2VjdGlvbicpO1xuICAgIGhlcm9TZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVybycpO1xuICAgIFxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgICAgICAgICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjb250YWN0TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgICAgICAgICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgaG9tZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICAgICAgY29uc3QgZ2FsbGVyeUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBnYWxsZXJ5TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuICAgICAgICAgICAgZ2FsbGVyeUxpbmsudGV4dENvbnRlbnQgPSAnR2FsbGVyeSc7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChnYWxsZXJ5TGluayk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRlcjEudGV4dENvbnRlbnQgPSAnRUFUIERSSU5LIFZJU0lUJztcbiAgICAgICAgaGVhZGVyMS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLTEnKTtcbiAgICBcbiAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkZXIxKTtcbiAgICBoZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChuYXYpO1xuXG5cbmV4cG9ydCB7aGVyb1NlY3Rpb259OyIsImltcG9ydCB7aGVyb1NlY3Rpb259IGZyb20gJy4vaGVybyc7XG5pbXBvcnQge2dhbGxlcnlTZWN0aW9ufSBmcm9tICcuL2dhbGxlcnknO1xuaW1wb3J0IHtjb250YWN0U2VjdGlvbn0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7Zm9vdGVyU2VjdGlvbn0gZnJvbSAnLi9mb290ZXInO1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChoZXJvU2VjdGlvbik7XG5jb250ZW50LmFwcGVuZENoaWxkKGdhbGxlcnlTZWN0aW9uKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xuY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJTZWN0aW9uKTtcbiIsImNvbnN0IGx1bmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1hZ2VzJyk7XG4gICAgXG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzIuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWcyLmNsYXNzTGlzdC5hZGQoJ2ltZy0yJyk7XG4gICAgaW1nMi5zcmMgPSAnLi9pbWcvbHVuY2gtMS5qcGcnO1xuICAgIGltZzIuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1nJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdpbWctMScpO1xuICAgIGltZzEuc3JjID0gJy4vaW1nL2x1bmNoLTIuanBnJztcbiAgICBpbWcxLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0Zvb2QgSW1hZ2UnKTtcbiAgICBjb25zdCBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMy5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWltZycpO1xuICAgIGltZzMuY2xhc3NMaXN0LmFkZCgnaW1nLTMnKTtcbiAgICBpbWczLnNyYyA9ICcuL2ltZy9sdW5jaC0zLmpwZyc7XG4gICAgaW1nMy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdGb29kIEltYWdlJyk7XG4gICAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pbWcnKTtcbiAgICBpbWc0LmNsYXNzTGlzdC5hZGQoJ2ltZy00Jyk7XG4gICAgaW1nNC5zcmMgPSAnLi9pbWcvbHVuY2gtNC5qcGcnO1xuICAgIGltZzQuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuICAgIGNvbnN0IGltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWc1LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1nJyk7XG4gICAgaW1nNS5jbGFzc0xpc3QuYWRkKCdpbWctNScpO1xuICAgIGltZzUuc3JjID0gJy4vaW1nL2Zvb2QtNS5qcGcnO1xuICAgIGltZzUuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuICAgIGNvbnN0IGltZzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWc2LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaW1nJyk7XG4gICAgaW1nNi5jbGFzc0xpc3QuYWRkKCdpbWctNicpO1xuICAgIGltZzYuc3JjID0gJy4vaW1nL2Zvb2QtNi5qcGcnO1xuICAgIGltZzYuc2V0QXR0cmlidXRlKCdhbHQnLCAnRm9vZCBJbWFnZScpO1xuXG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChpbWcxKTtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZzIpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1nMyk7XG4gICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChpbWc0KTtcbiAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZzUpO1xuICAgIGdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1nNik7XG5cbiAgICByZXR1cm4gZ2FsbGVyeTtcbn1cblxuZXhwb3J0IHtsdW5jaH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==