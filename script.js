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


var elems =  document.querySelectorAll(".elem")
var page2 =document.querySelector("#page2")
elems.forEach(function(element) {
   element.addEventListener("mouseenter",function(){
     var bgimg =  element.getAttribute("data-img")
     page2.style.backgroundImage =`url(${bgimg})`
  
   })
});

document.querySelector("#scroll-animation-3").addEventListener("click", () => {
    scroll.scrollTo(0)
})

document.querySelector("#scroll-animation-1").addEventListener("click", () => {
    scroll.scrollTo(page2)
})

document.querySelector("#scroll-animation-2").addEventListener("click", () => {
    scroll.scrollTo(page3)
})




// this code helps to move Top to bottom or ^

// document.querySelector("footer h2").addEventListener("click",()=>{
// console.log()
// })