var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__nav-toggler');

navMain.classList.remove('main-nav--no-js');
navToggle.classList.remove('page-header__nav-toggler--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }

  if (navToggle.classList.contains('page-header__nav-toggler--closed')) {
    navToggle.classList.remove('page-header__nav-toggler--closed');
    navToggle.classList.add('page-header__nav-toggler--opened');
  } else {
    navToggle.classList.add('page-header__nav-toggler--closed');
    navToggle.classList.remove('page-header__nav-toggler--opened');
  }
});
