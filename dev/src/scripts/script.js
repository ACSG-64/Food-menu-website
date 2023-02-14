"use strict";

setInterval(() => {
    const iconDisplayed_el = document.querySelector('#welcoming-section .food-icons i.display');
    iconDisplayed_el.classList.remove('display');

    const nextIcon_el = iconDisplayed_el.nextElementSibling
        ?? document.querySelector('#welcoming-section .food-icons i');

    nextIcon_el.classList.add('display');
}, 4000)