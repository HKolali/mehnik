// let body = document.querySelector(".full-body");
// let profile = document.querySelector(".main-header__profile");
// let profileDropdown = document.querySelector(".main-header__profile-dropdown");
// let visibilityProfile = false;

// profile.addEventListener("click", () => {
//     if (!visibilityProfile) {
//         profileDropdown.style.display = 'flex';
//         body.style.display = 'block';
//         visibilityProfile = true;
//     } else {
//         profileDropdown.style.display = 'none';
//         visibilityProfile = false;
//     }
// });

// body.addEventListener("click", () => {
//     body.style.display = 'none';
//     profileDropdown.style.display = 'none';
//     visibilityProfile = false;
// });


const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

setInterval(() => {
    swiper.slidePrev();
}, 3000);
