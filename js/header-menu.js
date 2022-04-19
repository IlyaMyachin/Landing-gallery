document.querySelector('#header__burger').addEventListener('click', function() {
  document.querySelector('#header__nav').classList.toggle('active');
  this.classList.toggle('active');
  document.querySelector('#login-header').classList.toggle('active');
  document.body.classList.toggle('active')
});

document.querySelectorAll('.nav-header__link').forEach(function(menuBtn) {
  menuBtn.addEventListener('click', function() {
    document.querySelector('#header__nav').classList.remove('active');
    document.querySelector('#header__burger').classList.remove('active');
    document.querySelector('#login-header').classList.remove('active');
    document.body.classList.remove('active')
  })
});
