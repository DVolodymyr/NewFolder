$(document).ready(function () {
  $('.burger').click(function () {
    $('.burger').toggleClass('active');
    $('.cross').toggleClass('active');
    $('.nav__conteiner__menu').toggleClass('active');
  });
  $('.cross').click(function () {
    $('.burger').toggleClass('active');
    $('.cross').toggleClass('active');
    $('.nav__conteiner__menu').toggleClass('active');
  });
});