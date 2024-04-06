

let menuIcon = document.getElementById('menu-icon');
let menuClose = document.getElementById('menu-close');

let navRight = document.getElementById('nav-right');



menuIcon.addEventListener('click',()=>{
    navRight.style.top = '50%';
})
menuClose.addEventListener('click',()=>{
    navRight.style.top = '-50%';
})
















// GSAP



let tl = gsap.timeline();


tl.from('#nav',{
    opacity: 0,
    duration: .5,
    delay:.3,
})

tl.from('#first-right>a',{
    y:-100,
    opacity: 0,
    duration:1,
    stagger:.2,
});


tl.from('#nav-left,#last-right',{
    y:-100,
    opacity:0,
    duration: .5,
});


tl.from('#container-left>h1,#container-left>#btns',{
    opacity:0,
    duration: 1,
    stagger: .5,
})
tl.from("#container-right",{
    x:500,
    opacity: 0,
    duration:.5,
})

tl.from('#container-left>hr',{
    x:-500,
    opacity: 0,
});








gsap.from('#page2 .box',{
    y:200,
    opacity:0,
    stagger: .4,
    scrollTrigger: {
        trigger: '#page2 .box',
        scroller:'body',
        // markers: true,
        start: 'top 70%',
        end: 'top 60%',
        scrub: 3,
    }
})
