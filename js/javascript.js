SmoothScroll({
    animationTime: 800, // [ms]
    stepSize: 100, // [px]
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3
    touchpadSupport: false,
});



// preloader
const preloader = async() => {
    $('[data-anim-count]').each(function() {
        let elem = $(this).attr('data-anim-count');
        $(this).prop('Counter', 0).animate({
            Counter: elem
        }, {
            duration: 6000,
            easing: 'linear',
            step: function(now) {
                if (Math.ceil(now) < 10) {
                    $(this).text('0' + Math.ceil(now));
                } else {
                    $(this).text(Math.ceil(now));
                }
            },
        });
    });
}
preloader();

// Load home when gifs are done
function loadSprite(src) {
    let deferred = $.Deferred();
    let sprite = new Image();
    sprite.onload = function() {
        deferred.resolve();
    };
    sprite.src = src;
    return deferred.promise();
}

let loaders = [];
loaders.push(loadSprite(''));

$.when.apply(null, loaders).done(function() {
    $('.preloader__done').click();

    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
});


// footer runline
$(() => {
    let followItem = $(".follow-list-item");
    let followList = $(".follow-list");

    let i = 0;
    while (i < 35) {
        i++;
        $(followItem).clone().appendTo(followList);
    }

    function loop() {
        $(followList).css({
            left: 0
        });
        $(followList).animate({
            left: '-10000',
        }, 400000, 'linear', function() {
            loop();
        });
    }
    loop();
});



// slider
const swiperArr = [];
$('[data-swiper=hero3]').each(function(index, el) {
    let swiper = new Swiper(el, {
        speed: 800,
        slidesPerView: 1,
        loop: true,
        allowTouchMove: false,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: [0, '-110%', 0],
            },
            next: {
                translate: [0, '110%', 0],
            },
        },
    });
    swiperArr[index] = swiper;
});

// slider
var swiperHero1 = new Swiper("[data-swiper=hero1]", {
    speed: 800,
    slidesPerView: 'auto',
    loop: true,
    allowTouchMove: false,
    navigation: {
        nextEl: '[data-swiper=next-hero]',
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -420],
        },
        next: {
            translate: ['185%', 0, -420],
        },
    },
});

// slider
var swiperHero2 = new Swiper("[data-swiper=hero2]", {
    speed: 800,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    effect: "creative",
    creativeEffect: {
        prev: {
            opacity: 1,
            translate: [0, 0, 0],
        },
        next: {
            opacity: 1,
            translate: [0, 156, 0],
        },
    },
});

swiperHero1.on('realIndexChange', function() {
    swiperHero2.slideNext(800);
    for (var i = 0; i < swiperArr.length; i++) {
        swiperArr[i].slideNext(800);
    }
});


// slider nav in hero
$(() => {
    let slideNext;
    $("[data-swiper=next-hero]").hover(function() {
        slideNext = $('.swiper-slide.mod--hero1.swiper-slide-next');
        $(slideNext).addClass('active');
    }, function() {
        $(slideNext).removeClass('active');
    });
});


// animate avatars
$('.mod--collect-auth, .mod--collect-auth-desc').removeClass('active');
$(".list-item.mod--collect").hover(function() {
    $(this).find('.mod--collect-auth, .mod--collect-auth-desc').addClass('active')
}, function() {
    $(this).find('.mod--collect-auth, .mod--collect-auth-desc').removeClass('active')
});

// slider
var swiperPainter = new Swiper("[data-swiper=painter]", {
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 88,
    centeredSlides: true,
    autoHeight: true,
    allowTouchMove: true,
    navigation: {
        nextEl: '[data-swiper=next-painter]',
        prevEl: '[data-swiper=prev-painter]',
    },
    loop: true,
    mousewheel: {
        enable: true,
    },
});


swiperPainter.on('realIndexChange', function() {
    $('.overflow-hidden.mod--img-painter, .img.mod--painter').removeClass('active');
    let currentSlide = $(swiperPainter.el).find(`.swiper-slide:eq(${swiperPainter.activeIndex})`);
    $(currentSlide).find('.overflow-hidden.mod--img-painter, .img.mod--painter').addClass('active');
});
swiperPainter.slideTo(2, 0);


// run gif when hover
$(() => {
    let $img, $imgSrc, $imgSrcset, $imgSrcgif;

    $("[data-gif]").hover(function() {
        if ($(this).is('[data-srcgif]')) {
            $img = $(this);
        } else {
            $img = $(this).find('[data-srcgif]');
        }

        $imgSrc = $img.attr('src');
        $imgSrcset = $img.attr('srcset');
        $imgSrcgif = $img.attr('data-srcgif');

        $img.attr({
            src: $imgSrcgif,
            srcset: $imgSrcgif
        });
    }, function() {
        $img.attr({
            src: $imgSrc,
            srcset: $imgSrc
        });
    });
});