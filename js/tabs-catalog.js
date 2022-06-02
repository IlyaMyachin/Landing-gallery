document.querySelectorAll('.accordion-catalog__tabs-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {

    document.querySelectorAll('.accordion-catalog__tabs-btn').forEach(function(tabsStyle)  {
      tabsStyle.classList.remove('accordion-catalog__tabs-btn--active');
    });
    
    e.currentTarget.classList.add('accordion-catalog__tabs-btn--active');
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__left-block').forEach(function(block) {
      block.classList.remove('catalog__left-block--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-block--active')
  })
})
