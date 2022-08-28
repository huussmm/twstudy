/*-----------------------
testmonial slider 
--------------------------*/

function testmonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
   if(carouselOne)
   {
     carouselOne.addEventListener('slid.bs.carousel',function (){
         const activeItem = this.querySelector(".active");
        document.querySelector(".js-testmonial-img").src = activeItem.getAttribute("data-js-testmonial-img");
     })
   }else{
    console.log(false);      
   }
}
testmonialSlider();     

/*-----------------------
sticky navbar  
--------------------------*/

// function stickyNavBar(){
//   const header = document.querySelector("header");
// window.addEventListener("scroll",function(){
//   header.classList.toggle("sticky",this.window.scrollY > 0);
// });
// }

stickyNavBar();