// api Intersection Observer


// const question = document.getElementById ('question')
// const breakk = document.getElementById ('break')
// const guiltyFree = document.getElementById ('guiltyFree')

// const  chargeMain = (entradas, observador) => {
   
//   entradas.forEach(entrada => {
//      if(entrada.isIntersecting){
//        entrada.target.classList.add('visible');
//      }
//      else {
//       entrada.target.classList.remove('visible');
//     }
//   });
// }

// // 1er visualViewport, funcion q se ejecute cuando elemento llegue al viewport, 2do param es un objeto con config
// const observer = new IntersectionObserver(chargeMain,{
//     // el null es por q hace ref al visualViewport, si en vez de esto hace ref a otro elemento al pasar por encima, no iria null
//     root: null,
//     rootMargin: '0px 0px -100px 0px',
//     // el threshold es, si queres que aparte cuando todo el elemento este dentro, iria 1.0, si cuando la mitad ya ingreso 0.5
//     // threshold: 0.2
// });


// observer.observe(question);
// observer.observe(breakk);
// observer.observe(guiltyFree);

let animation = document.getElementsByClassName("animation");
console.log(animation);

function animationScroll(){
  let scrollTop = document.documentElement.scrollTop;
  console.log("scroll" + scrollTop);
  for (var i=0; i < animation.length; i++){
    let heightAnimation = animation[i].offsetTop;
    console.log("elemento" + heightAnimation);

    if (heightAnimation -500 < scrollTop){
      animation[i].style.opacity = 1;
      animation[i].classList.add('fromAbove')
    }
    else if (heightAnimation -700  > scrollTop){  
      animation[i].style.opacity = 0;
      animation[i].classList.toggle("fromAbove")
    }
  }
}

window.addEventListener('scroll',animationScroll);