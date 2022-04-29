document.querySelectorAll('.accordion-catalog__button').forEach(function(item) {
  item.addEventListener('click', function() {
    var parent = item.parentElement;
    parent.classList.add('current');
    document.querySelectorAll('.accordion-catalog__content').forEach(function(btn) {
      var removeTarget = btn;
      if (!removeTarget.classList.contains('current')) {
        removeTarget.classList.remove('accordion-catalog__content--active');
      };
    });
    parent.classList.toggle('accordion-catalog__content--active');
    parent.classList.remove('current');
  });
});
