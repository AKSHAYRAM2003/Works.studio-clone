const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

 var tl = gsap.timeline()
gsap.to("#yellow1",{
top:"-800",
delay:0.5,
duration:1.5,
ease:"expo.out"

})

tl.from("#yellow2",{
    top:"800",
    delay:1.8,
    duration:0.9,
    ease:"expo.out"
},"anim")
 
tl.to("#loader h1" ,{
    delay:1.8,
    duration:1.2,
    color:"black"
},"anim")
tl.to("#loader",{
    
  display:"none"

})