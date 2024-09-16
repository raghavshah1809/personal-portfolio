const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
  }
  circleMouseFollower();

  function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
       y:0,
       ease: Expo.easeInOut,
       duration: 2,
       delay:-1,
       stagger: .2
    })
    .from('#footer',{
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })
  }
  firstPageAnim();
  
  document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mousemove",function (dets){
       gsap.to(elem.querySelector("img"),{
        opacity: 1,
        ease: Power1,
       });
    });
  });
