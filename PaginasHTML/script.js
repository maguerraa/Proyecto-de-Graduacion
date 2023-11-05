'use strict';

jQuery.noConflict();
jQuery(document).ready(function ($) {

    // usage: 2
    $('#myForm').formToJson('.result-json-output');

});


document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("active");
        });
    });
});

// JavaScript para el acordeón
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});
