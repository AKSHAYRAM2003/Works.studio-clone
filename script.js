const scroll = new LocomotiveScroll({
    el: document.querySelector('[#main]'),
    smooth: true
});
// smooth
// learp
// data scroll speed
// data scroll speed-direction

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function loading(){
    let tl = gsap.timeline()
    tl.to("#loder #yellow1",{
        top:"-100%",
        delay:0.3,
        duration:0.7,
        ease: "power4.out",
    })
    tl.from("#yellow2",{
        top:"100%",
        delay:0.4,
        duration:0.7,
        ease: "power4.out",
    },"anim")
    tl.to("#loder h1",{
        color:"black",
        delay:0.3,
        duration:0.7,
    },"anim")
    tl.to("#loder",{
        display:"none",
        delay:0.2,
    },"anim")
}

