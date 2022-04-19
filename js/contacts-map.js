ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("contacts__map", {
        center: [55.75969797579238,37.61571618891559],
        zoom: 14
    });

    var myPlacemark1 = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-icon.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    myMap.behaviors.disable('scrollZoom')
    myMap.geoObjects.add(myPlacemark1);
}

