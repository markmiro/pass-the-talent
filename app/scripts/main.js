(function () {
  'use strict';
  var $ = document.querySelector.bind(document);
  console.log($('html'));
  $('.hamburger').addEventListener('click', function () {
    $('.nav').classList.toggle('hide');
  });
  $('a[href="#"]').addEventListener('click', function (e) {
    e.preventDefault();
  })
})();
