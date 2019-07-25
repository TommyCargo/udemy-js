/*
// native js
// let btn = document.getElementById('rub');
// jQuery:
let btn = $('#btn');
*/
$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });





});