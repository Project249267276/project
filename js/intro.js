gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        ease: 6,
        trigger: '.id__0',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true
    }
})

tl.to('id__0'), ({
    x: 800
})