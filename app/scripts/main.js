'use strict'

window.onload = () => {
  range()
  menu()
  inputWithoutFocus()
  scroll()
  data()
  $('select').selectize();
}

let arrayBodies;
fetch('assets/data/bodies.json').then(function(response) {
  response.json().then(function(arrayBodies) {
  })
})

let inputWithoutFocus = () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(element => {
    element.addEventListener('keyup', () => {
      let val = element.value;
      if(val.length > 0){
        element.classList.add('active')
      }else{
        element.classList.remove('active')
      }
    })
  })
}

let menu = () => {
  const button = document.querySelector('.header-gamburger'),
  menu = document.querySelector('.nav');
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    menu.classList.toggle('open');
  })
}

let scroll = () => {
  $(".nav-list__item").on("click", function() {
    $('.nav').removeClass('open');
    var href = event.target.getAttribute('href');
    event.preventDefault()
    $("html,body").stop().animate({
        scrollTop: $(href).offset().top
    },1e3);
  })
}

let data = () => {
  const worker = [
    "Чернов Алексей Владимирович",
    "Санкт-Петербург",
    "sniperr_89",
    "darkdodgerfox@yandex.ru",
    "Мне понравился уровень компании WM, реализованные проекты, и предлагаемый удаленный формат. Я надеюсь на интересные задачи, которые позволят мне развиваться в javascript."
  ];
  const inputs = document.querySelectorAll('.input input'),
        txtarea = document.querySelector('.textarea');
  txtarea.value = worker[4];
  inputs.forEach((element, index) => {
    let attr = element.name;
    element.value = worker[index];
  })
}

let range = () => {
  $('input[type="range"]').rangeslider({
  polyfill: false,
  onSlide: function(position, value) {
    const fill = document.querySelector('.rangeslider__fill'),
          handle = document.querySelector('.rangeslider__handle');
    switch (value) {
      case 0:
        fill.style.width = "0%";
        handle.style.transform = "translate(-11px, 0)";
        break;
      case 100:
        fill.style.width = "25%";
        handle.style.transform = "translate(-6px, 0)";
        break;
      case 200:
        fill.style.width = "50%";
        handle.style.transform = "translate(0px, 0)";
        break;
      case 300:
        fill.style.width = "50%";
        handle.style.left = "48.3%";
        break;
      case 400:
        fill.style.width = "100%";
        handle.style.transform = "translate(9px, 0)";
        break;
      default:
        alert( "Нет таких значений" );
    }
  }
});
}
