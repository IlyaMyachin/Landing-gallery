document.querySelectorAll('.menu-item-header__btn').forEach(function(menuBtn) {
  menuBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.dropdown-header').forEach(function(dropdown) {
      var target = dropdown.dataset.target
      if (target !== path) {
        dropdown.classList.remove('dropdown-header--active')
      }});
    document.querySelector(`[data-target="${path}"]`).classList.toggle('dropdown-header--active')
  });
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-header' && '.menu-item-header__btn')) {
    document.querySelectorAll('.dropdown-header').forEach(function(dropdown) {
      dropdown.classList.remove('dropdown-header--active')});
    };
  });
