document.querySelectorAll('.accordion-catalog__button').forEach(function(item) {
  item.addEventListener('click', function() {
    const accItem = item.nextElementSibling;
    const icon = item.querySelector('.accordion-catalog__icon');
    accItem.classList.toggle('accordion-catalog__list--active');
    icon.classList.toggle('accordion-catalog__icon--active');
  });
});
