//smooth scroll library

//const scroll = new SmoothScroll('.navbar ul li a[href*="#"]',{
  //  speed:1000
//});


//smooth scroll by Hammonds in jquery

$('.navbar ul li a').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop:$(hash).offset().top
        },1000);
    }
});

// hover effect

const work = document.querySelector('.services');
work.addEventListener('mouseover',function(e){
    e.preventDefault();
    mouse();
})
function mouse(){
    const element =  document.querySelectorAll('.card-2 ');
    element.classList.add('animated', 'bounceOutLeft')
 }

 //visual scroll effects

 
 function scrollAppear(){
     var introText = document.querySelector('.main');
     var introPosition = introText.getBoundingClientRect().top;
     var screenPostion = window.innerHeight /1.9;
     var top = document.querySelector('.top-arrow');

     if(introPosition < screenPostion){
         introText.classList.add('intro-appear');
        top.style.opacity= 1;
     }
 }

 window.addEventListener('scroll',scrollAppear);


 

// Responsive Navbar effects

function navBar(){
    const hamburger =  document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    hamburger.addEventListener('click',(e)=>{
        e.preventDefault();
        nav.classList.toggle('nav-appear');
        

    })
}
navBar();
