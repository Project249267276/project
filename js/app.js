gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


const scrollingSections = gsap.utils.toArray('section');

const scrollTween = gsap.to(scrollingSections, {
    xPercent: -100 * (scrollingSections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.wrapper',
        pin: true,
        scrub: 0.5,
        snap: 1 / (scrollingSections.length - 1),
        start: 'top top',
        end: 6000,
    }
});

gsap.to('.projectname', {
    fontSize: '25px',
    top: '2rem',
    scrollTrigger: {
        trigger: '.projectname',
        start: 'top top',
        end: 1500,
        scrub: 0.5,
    }
})

gsap.to('.linestart', {
    height: '10rem',
    scrollTrigger: {
        trigger: '.linestart',
        scrub: 0.5,
        start: 'center center',
        end: 2000,
    }
})

document.querySelectorAll('.character').forEach(el => {

    gsap.to(el.querySelector('.caption'), {
        x: 0,
        y: 0,
        scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: el.querySelector('.caption'),
            start: 'top bottom',
            end: '+=1000',
            scrub: 0.5,
        }
    })

    gsap.to(el.querySelector('.quote'), {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: el.querySelector('.quote'),
            start: 'top bottom',
            end: '+=20%',
            scrub: 0.5,
        }
    })

    gsap.to(el.querySelector('.nickname'), {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: el.querySelector('.nickname'),
            start: 'top bottom',
            end: '+=10%',
            scrub: 0.5,
        }
    })

    gsap.to(el.querySelector('.block'), {
        x: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: el.querySelector('.block'),
            start: 'top bottom',
            end: '+=' + window.innerWidth,
            scrub: 0.5,
        }
    })

    gsap.to(el.querySelector('img'), {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: el.querySelector('img'),
            start: 'top bottom',
            end: '+=50%',
            scrub: 0.5,
        }
    })

    gsap.to(el.querySelector('.huge-text'), {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: el.querySelector('.huge-text'),
            start: 'top bottom',
            end: '+=100%',
            scrub: 0.5,
        }
    })

})

const animatedSections = document.querySelectorAll('.animated-section');


const observer = new IntersectionObserver((entries) => {
    entries.map((entry) => {
        const element = entry.target;
        const tl = gsap.timeline({ paused: true });

        tl.to(element.querySelector('h2'), { text: element.dataset.title, duration: 1 }, 0.5)
            .fromTo(element.querySelector('h4'), { y: '-100%', opacity: 0 }, { y: 0, opacity: 1 }, 1.5)
            .fromTo(element.querySelector('p'), { y: '100%', opacity: 0 }, { y: 0, opacity: 1 }, 1.5)
            .fromTo(element.querySelector('img'), { filter: 'brightness(0)' }, { filter: 'brightness(1)' }, 2);

        if (entry.isIntersecting) {
            tl.play(0);
        } else {
            tl.progress(0);
            element.querySelector('h2').innerText = '';
        }
    });
}, {
    threshold: 0.5,
});

animatedSections.forEach(section => observer.observe(section));

gsap.to('.gallery-box', {
    x: 0,
    scrollTrigger: {
        trigger: '.gallery-box',
        start: 'top top',
        scrub: true,
    },
});

let mousPos = { x: 0, y: 0 };
let galleryPos = { x: 0, y: 0 };
let galleryBounds = { top: 0, bottom: 0, right: 0, left: 0 };

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('div#gallery-box');
    galleryPos = { x: gallery.offsetleft + gallery.offsetWidth / 2, y: gallery.offsetTop + gallery.offsetHeight / 2 };
    galleryBounds = { top: gallery.offsetTop, right: gallery.offsetLeft + gallery.offsetWidth, bottom: gallery.offsetTop + gallery.offsetHeight, left: gallery.offsetLeft };

    gallery.addEventListener('mousemove', function(e) {
        mousPos = { x: e.pageX, y: e.pageY };
        calcoffset();
        move();
        parallaxPics();
    });

    gallery.addEventListener('mousleave', function() {

        document.querySelectorAll('div#gallery-box div.gallery').forEach(function(element) {
            element.setAttribute('data-offset-x', '0');
            element.setAttribute('data-offset-y', '0');

        });
        document.querySelectorAll('div.item img').forEach(function(img) {
            img.style.left = '50%'
            img.style.top = '50%'

        });
        move();
    });
    window.addEventListener('resize', function() {
        galleryPos = { x: gallery.offsetleft + gallery.offsetWidth / 2, y: gallery.offsetTop + gallery.offsetHeight / 2 };
        galleryBounds = { top: gallery.offsetTop, right: gallery.offsetLeft + gallery.offsetWidth, bottom: gallery.offsetTop + gallery.offsetHeight, left: gallery.offsetLeft };
    });
    document.querySelectorAll('div.overlay a').forEach(function(a) {
        a.addEventListener('mouseleave', function() {
            a.classList.add('leave');
            setTimeout(function() {
                a.classList.remove('leave');
            });
        });
    });
});

(function($) {
    $(function() {

        $(window).on('scroll', function() {
            fnOnScroll();
        });

        $(window).on('resize', function() {
            fnOnResize();
        });

        var agTimeline = $('.js-timeline'),
            agTimelineLine = $('.js-timeline_line'),
            agTimelineLineProgress = $('.js-timeline_line-progress'),
            agTimelinePoint = $('.js-timeline-card_point-box'),
            agTimelineItem = $('.js-timeline_item'),
            agOuterHeight = $(window).outerHeight(),
            agHeight = $(window).height(),
            f = -1,
            agFlag = false;

        function fnOnScroll() {
            agPosY = $(window).scrollTop();

            fnUpdateFrame();
        }

        function fnOnResize() {
            agPosY = $(window).scrollTop();
            agHeight = $(window).height();

            fnUpdateFrame();
        }

        function fnUpdateWindow() {
            agFlag = false;

            agTimelineLine.css({
                top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
                bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
            });

            f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
        }

        function fnUpdateProgress() {
            var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

            i = agTop + agPosY - $(window).scrollTop();
            a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
            n = agPosY - a + agOuterHeight / 2;
            i <= agPosY + agOuterHeight / 2 && (n = i - a);
            agTimelineLineProgress.css({ height: n + "px" });

            agTimelineItem.each(function() {
                var agTop = $(this).find(agTimelinePoint).offset().top;

                (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
            })
        }

        function fnUpdateFrame() {
            agFlag || requestAnimationFrame(fnUpdateWindow);
            agFlag = true;
        }

    });
})(jQuery);