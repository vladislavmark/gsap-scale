import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.set(".image-bg", { filter: "blur(10px)" });

const timeline = new gsap.timeline({
    scrollTrigger: {
        trigger: ".section-scroll .wrap-svg",
        scrub: 0.5,
        pinSpacing: false,
        pin: true,
        start: "top top",
        end: "300% 40%",
        markers: true
    }
});

timeline
    .to('.image-bg', 1, {
        filter: "blur(0px)",
    })
    .fromTo('.wrap-svg', 9000, {
        scale: 1,
    }, {
        scale: 28,
    })
