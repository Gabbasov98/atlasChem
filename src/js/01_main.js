function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    })
}

$(".header__burger").click(function() {
    $(this).toggleClass("header__burger--active")
    $(".header").toggleClass("header--active")
    $("body").toggleClass("fixed-body")
})


mainSlider()

fixHeader()
$(window).scroll(function() {
    fixHeader()
})
$(window).resize(function() {
    fixHeader()
})

function fixHeader() {
    if ($(window).scrollTop() > 120) {
        $(".header").addClass("header--fix")
    } else {
        $(".header").removeClass("header--fix")
    }
}




function setCountryOnMap(mapArea, country) {

    if (window.innerWidth < 992) {
        return
    }

    let countryPosition = {
        top: $(mapArea).offset().top,
        left: $(mapArea).offset().left,
        width: $(mapArea).width(),
        height: $(mapArea).height(),
    }


    $(country).css({
        'top': `${countryPosition.top - 30}px`,
        'left': `${countryPosition.left}px`
    })
    if ($(country).hasClass("map__country--swiss")) {
        $(country).css({
            'top': `${countryPosition.top - 40}px`,
        })
    }
    if ($(country).hasClass("map__country--india")) {
        $(country).css({
            'top': `${countryPosition.top + 80}px`,
            'left': `${countryPosition.left + 50}px`
        })
    }
    if ($(country).hasClass("map__country--turkey")) {
        $(country).css({
            'top': `${countryPosition.top - 0}px`,
            'left': `${countryPosition.left + 20}px`
        })
    }
}

setCountryOnMap(".map-area--swiss", ".map__country--swiss")
setCountryOnMap(".map-area--india", ".map__country--india")
setCountryOnMap(".map-area--turkey", ".map__country--turkey")

$(window).resize(function() {
    setCountryOnMap(".map-area--swiss", ".map__country--swiss")
    setCountryOnMap(".map-area--india", ".map__country--india")
    setCountryOnMap(".map-area--turkey", ".map__country--turkey")
})

$(".map__country").click(function() {
    let modalId = $(this).attr("data-modal-id")
    $(`#${modalId}`).addClass("map-modal--active")
})

$(".map-modal__bg").click(function() {
    closeMapModal()
})

$(".map-modal__close").click(function() {
    closeMapModal()
})

function closeMapModal() {
    $(".map-modal").removeClass("map-modal--active")
    $("body").removeClass("fixed-body")
}


$(".inter__tabs .tab").click(function() {
    let path = $(this).attr("data-tabs-path")
    console.log(path);
    $(this).siblings(".tab").removeClass("tab--active")
    $(this).addClass("tab--active")
    $(".map-modal").removeClass("map-modal--show")
    $(`.map-modal[data-tabs-path="${path}"]`).addClass("map-modal--show")
})

$(".product__tabs .tab").click(function() {
    $(this).siblings(".tab").removeClass("tab--active")
    $(this).addClass("tab--active")
})

$(".product__more").click(function() {
    $(".product__items").removeClass("product__items--hidden")
    $(this).hide()
})

$("[data-modal-id]").click(function() {
    let modalId = $(this).attr("data-modal-id")
    $(`#${modalId}`).addClass("mModal--active")
    $("body").addClass("fixed-body")
})

$(".mModal__bg").click(function() {
    closeModal()
})

$(".mModal__close").click(function() {
    closeModal()
})

function closeModal() {
    $(".mModal").removeClass("mModal--active")
    $("body").removeClass("fixed-body")
}