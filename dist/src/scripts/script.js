"use strict";

setInterval(function () {
  var _iconDisplayed_el$nex;
  var iconDisplayed_el = document.querySelector('#welcoming-section .food-icons i.display');
  iconDisplayed_el.classList.remove('display');
  var nextIcon_el = (_iconDisplayed_el$nex = iconDisplayed_el.nextElementSibling) !== null && _iconDisplayed_el$nex !== void 0 ? _iconDisplayed_el$nex : document.querySelector('#welcoming-section .food-icons i');
  nextIcon_el.classList.add('display');
}, 4000);