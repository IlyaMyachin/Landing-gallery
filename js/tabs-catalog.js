document.querySelectorAll('.accordion-catalog__tabs-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__left-block').forEach(function(block) {
      block.classList.remove('catalog__left-block--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-block--active')
  })
})
