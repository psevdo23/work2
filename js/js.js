$(document).ready(function () {
    gsap.timeline()
        .to(".shtora", {y: -window.innerHeight, duration: 0.8, delay: 0}, 0)
        .to(".shtora2", {opacity: 0, duration: 2, delay: 0.6}, 0)
        .from(".pike", {x: 400, duration: 0.8, delay: 0.6}, 0)
        .from(".medialab", {x: -400, duration: 0.8, delay: 0.6}, 0)
        .from(".nav", {marginTop: 100, duration: 0.7, delay: 0.4}, 0);

    const PekeMedialab = gsap.timeline();
    PekeMedialab
        .to(".pike", {x: window.innerWidth}, 0)
        .to(".medialab", {x: -window.innerWidth}, 0)
        .to(".video1", {opacity: 0}, 0)
        .to(".logo2", {y: -window.innerHeight}, 0)
    const cso = new ScrollMagic.Controller();
    const dda = new ScrollMagic.Scene({
        triggerElement: ".first",
        duration: 700,
        triggerHook: 0
    })
        .setTween(PekeMedialab)
        .addIndicators()
        .addTo(cso);

    gsap.timeline()
        .fromTo('.navigation', {y: 40, opacity: 0}, {y: 0, opacity: 1, delay: .7}, 0)
        .fromTo('.pike', {x: 50, opacity: 0}, {x: 0, opacity: 1, delay: .7}, 0)
        .fromTo('.medialab', {x: -50, opacity: 0}, {x: 0, opacity: 1, delay: .7}, 0);


    new ScrollMagic.Scene({triggerElement: ".nav", offset: 150, triggerHook: 0})
        .setClassToggle(".navigation", "navAnimation")
        .addIndicators()
        .addTo(cso);

    const tween1 = gsap.timeline();

    const dignitCyounter = gsap.timeline()
    dignitCyounter
        .from(".clock", {y: 200, duration: 1, delay: 0}, 0)
        .from(".confidence", {y: 200, duration: 1, delay: .2}, 0)
        .from(".release", {y: 200, duration: 1, delay: .4}, 0)
        .from(".awards", {y: 200, duration: 1, delay: .6}, 0);
    const ssd = new ScrollMagic.Controller();
    const dignitCyounterScene = new ScrollMagic.Scene({
        triggerElement: ".two",
        triggerHook: 0.8, reverse: false
    })
        .setTween(dignitCyounter)
        .offset(-200)
        .addIndicators()
        .addTo(ssd)

    let show = true;
    $(window).scroll(() => {
        if (!show) return false;
        if ($(this).scrollTop() >= $('.two').offset(), -500) {
            gsap.to(".lis__advantages", {
                onStart: () => {
                    $(".number").spincrement({
                        thousandSeparator: " ",
                        duration: 1000,
                    });
                }
            });
            show = false;
        }
    });

    new ScrollMagic.Scene({
        triggerElement: ".lis__advantages",
        triggerHook: 0.8,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".control__client", "control__client2")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({
        triggerElement: ".lis__advantages",
        triggerHook: 0.8,
        offset: 300,
        reverse: false
    })
        .setClassToggle(".clients__list", "clients__list__transform")
        .addIndicators()
        .addTo(ssd);

    let counter = 0;

    $('#two__next').click(() => {
        if (counter === 0) {
            counter += -500;
        }
        if (counter > -2500) {
            counter += -500;
            if (counter === -1000) {
                $(".clients__list").toggleClass("position1")
                $("#two__previous").toggleClass("previous__opacity")
            }
            if (counter === -1500) {
                $(".clients__list").toggleClass("position2")
            }
            if (counter === -2000) {
                $(".clients__list").toggleClass("position3")
            }
            if (counter === -2500) {
                $(".clients__list").toggleClass("position4")
                $("#two__next").toggleClass("next__opacity")
            }
        }
    });

    $('#two__previous').click(() => {
        if (counter === -2500) {
            counter += 500;
        }
        if (counter < 0) {
            counter += 500;
            if (counter === -1500) {
                $(".clients__list").toggleClass("position4", false)
                $("#two__next").toggleClass("next__opacity", false)
            }
            if (counter === -1000) {
                $(".clients__list").toggleClass("position3", false)
            }
            if (counter === -500) {
                $(".clients__list").toggleClass("position2", false)
            }
            if (counter === 0) {
                $(".clients__list").toggleClass("position1", false)
                $("#two__previous").toggleClass("previous__opacity", false)
            }
        }
    })
    const spinningLogo = new gsap.timeline();
    spinningLogo
        .to(".four__spinning", {rotation: 360}, 0)

    new ScrollMagic.Scene({
        triggerElement: ".four ",
        duration: 800,
        triggerHook: 1
    })
        .setTween(spinningLogo)
        .addIndicators()
        .addTo(ssd);

    const spinningLogoSix = new gsap.timeline();
    spinningLogoSix
        .to(".six__spinning", {rotation: 360}, 0)

    new ScrollMagic.Scene({
        triggerElement: ".six",
        duration: 1200,
        triggerHook: 1
    })
        .setTween(spinningLogoSix)
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({triggerElement: ".seven", offset: 200, triggerHook: 0.6})
        .setClassToggle(".seven__text", "seven_text__animate1")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({triggerElement: ".seven", triggerHook: 0})
        .setClassToggle(".seven__text", "seven__text__animate2")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({triggerElement: ".tree__work__zone", triggerHook: 0.5})
        .setClassToggle(".relative", "blackColor")
        .addIndicators()
        .addTo(ssd);
    new ScrollMagic.Scene({triggerElement: ".tree__work__zone", triggerHook: 0.5})
        .setClassToggle(".bg__color", "bg__color__animated")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({
        triggerElement: ".nine",
        triggerHook: 0.8,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".control__integration", "control__integration2")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({
        triggerElement: ".nine",
        triggerHook: 0.8,
        offset: 300,
        reverse: false
    })
        .setClassToggle(".integration", "integration2")
        .addIndicators()
        .addTo(ssd);

    let counter2 = 0;
    $('#nine__next').click(() => {
        if (counter2 === 0) {
            counter2 += -500;
        }
        if (counter2 > -2500) {
            counter2 += -500;
            if (counter2 === -1000) {
                $(".integration").toggleClass("nine__position__n1")
                $("#nine__previous").toggleClass("previous__opacity")
            }
            if (counter2 === -1500) {
                $(".integration").toggleClass("nine__position__n2")
            }
            if (counter2 === -2000) {
                $(".integration").toggleClass("nine__position__n3")
            }
            if (counter2 === -2500) {
                $(".integration").toggleClass("nine__position__n4")
                $("#nine__next").toggleClass("next__opacity")
            }
        }
    });

    $('#nine__previous').click(() => {
        if (counter2 === -2500) {
            counter2 += 500;
        }
        if (counter2 < 0) {
            counter2 += 500;
            if (counter2 === -1500) {
                $(".integration").toggleClass("nine__position__n4", false)
                $("#nine__next").toggleClass("next__opacity", false)
            }
            if (counter2 === -1000) {
                $(".integration").toggleClass("nine__position__n3", false)
            }
            if (counter2 === -500) {
                $(".integration").toggleClass("nine__position__n2", false)
            }
            if (counter2 === 0) {
                $(".integration").toggleClass("nine__position__n1", false)
                $("#nine__previous").toggleClass("previous__opacity", false)
            }
        }
    })
    new ScrollMagic.Scene({
        triggerElement: ".tree__work__zone",
        triggerHook: 0.6    ,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".tree__size", "tree__size1")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({
        triggerElement: ".four",
        triggerHook: 1,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".four", "four1")
        .addIndicators()
        .addTo(ssd);


    new ScrollMagic.Scene({
        triggerElement: ".five",
        triggerHook: 1,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".five", "five1")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({
        triggerElement: ".six",
        triggerHook: 1,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".six", "six1")
        .addIndicators()
        .addTo(ssd);

    new ScrollMagic.Scene({
        triggerElement: ".eight",
        triggerHook: .5,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".eight1", "eight1__an")
        .addIndicators()
        .addTo(ssd);
    new ScrollMagic.Scene({

        triggerElement: ".eight",
        triggerHook: .5,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".eight2", "eight2__an")
        .addIndicators()
        .addTo(ssd);
    new ScrollMagic.Scene({

        triggerElement: ".eight",
        triggerHook: 0.5,
        offset: 100,
        reverse: false
    })
        .setClassToggle(".eight3", "eight3__an")
        .addIndicators()
        .addTo(ssd);

    $("#phone").mask("+7 (999) 999-99-99")

});
