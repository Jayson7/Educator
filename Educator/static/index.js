window.addEventListener("load", function() {
    var nav = document.querySelector("nav");
    var nav_active = document.querySelectorAll(".nav-active");
    var toggles = document.querySelector(".bar");
    var times = document.querySelector(".time");
    var ul = document.querySelector("ul");


    toggles.addEventListener("click", function() {
        nav.classList.toggle("nav-active")

        setTimeout(() => {
            ul.classList.toggle("uls")
        }, 100);

    })

})
$('.owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,

    responsiveClass: true,
    autoplay: true,
    nav: true,
    dot: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,

        },
        1000: {
            items: 1,


        }
    }
})