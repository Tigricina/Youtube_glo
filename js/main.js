const swiper = new Swiper('.swiper', {

    loop: true,
    slidesPerView: 5,

    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },
});

const recommendedSwiper = new Swiper('.recommended-slider', {

    loop: true,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
});

const foodSwiper = new Swiper('.food-slider', {

    loop: true,
    slidesPerView: 5,

    // Navigation arrows
    navigation: {
        nextEl: '.food-button-next',
        prevEl: '.food-button-prev',
    },
});