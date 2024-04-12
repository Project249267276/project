gsap.to(".product__image", {
    duration: 2,
    rotation: 360,
})

gsap.registerPlugin(ScrollTrigger); // ลงทะเบียน plugin ScrollTrigger

gsap.utils.toArray(".section").forEach((section, i) => {
    const animation = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => gsap.utils.getPosition(section).top + section.offsetHeight,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });

    // เพิ่มแอนิเมชั่นสำหรับแต่ละ section 
    // ตัวอย่าง: เพิ่ม opacity 
    animation.to(section, { duration: 1, opacity: 10 });

    // ตัวเลือกเพิ่มเติม:
    // - เพิ่มแอนิเมชั่นอื่นๆ เช่น การ translate, rotate, scale
    // - ปรับแต่ง easing function
    // - เพิ่มเงื่อนไขเพิ่มเติมสำหรับการเริ่ม/สิ้นสุดแอนิเมชั่น
});


gsap.to(".track", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
        trigger: ".section", // Trigger animation when the ".section" element scrolls
        start: () => gsap.utils.getPosition(".section").top, // Start animation when ".section" top reaches viewport top
        end: () => innerWidth * 3,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
});
const menu = ["ผ้าแพรวามีแบบใดบ้าง", "การทอผ้า", "การทอผ้า"]
const swiper = new Swiper('.swiper-container', {
    initialSlide: 2,
    touchRatio: 0,
    autoplay: {
        delay: 5000,
        disableOnInteration: false
    },
    autoplayDisableOnInteration: false,
    effect: 'fade',
    speed: 1000,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class "' + className + '">' + (menu[index]) + '</sapn>';
        }
    },

});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    const sections = gsap.utils.toArray('section');

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    gsap.to('.logo', {
        fontSize: '2.5rem',
        top: '4rem',
        scrollTrigger: {
            trigger: '.logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5,
        }
    })

    gsap.to('.line', {
        height: '10rem',
        scrollTrigger: {
            trigger: '.line',
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

})