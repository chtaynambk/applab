gsap.registerPlugin(ScrollTrigger);

// function yourfunction() {
  
  
//   /* do stuff on page load */ }

// window.onload = yourfunction;


// var loader =document.getElementById("loader");

// window.addEventListener("load", function(){
//   loader.style.display="none";
//   window.document.body.innerHTML.overflow = "auto";


  
// });

window.addEventListener("load", function () {
  const loader = document.querySelector(".preloader");

  // Check if the preloader has been displayed in this session
  if (!sessionStorage.getItem('viewedPreloader')) {
    // If not, display the preloader
    loader.className += " hidden";
    // Set a local storage flag to indicate that the preloader has been shown
    sessionStorage.setItem('viewedPreloader', 'true');
  } else {
    // If the preloader has been shown in this session, hide it
    loader.style.display = "none";

   
  
  }

});




function playLandingPageAnimation() {
  var tl= gsap.timeline();
  tl.from('.title h1 ',{
      duration: 1.5,
      translateY: 50,
      opacity: 0,
  
  }),
  tl.from('.title p ',{
  
    translateX: -50,
    opacity: 0,
  
  }),
  tl.from('.demo',{
  
    translateY: -50,
    opacity: 0,
  
  }),
  tl.from('.ftitle',{
  
      translateY: 50,
      opacity: 0,
  
  }),
  
  tl.from('.landbg',{
  
      translateX: 50,
      opacity: 0,
  
  })
  
}

window.onload = function () {
  
  playLandingPageAnimation();
};


// function yourfunction() {

// }
// window.onload = yourfunction;



gsap.from(".imgr", {
  duration: 1,
  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".imgr",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",
      // markers:true
      ease: "back.inOut(1.7)"
  }
});


gsap.from(".titlef h1", {
  duration: 1,
  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".titlef",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",

  }
});

gsap.from(".titlef ", {
  duration: 1,
  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".titlef",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",
 
  }
});

gsap.from(".titlef p", {
  duration: 0.5,
  y: 50,
 autoAlpha:0,
  delay:1,
  
  scrollTrigger:{
      trigger:".titlef",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",
 
  }
});



const animee = gsap.utils.toArray('.dflex ');

animee.forEach((dflex , i) => {
  const anim = gsap.from(dflex , {autoAlpha: 0, x: -50});
  ScrollTrigger.create({
    trigger: dflex ,
    start:"top, 70%",
    end:"top, 100%",
    animation: anim,
    // toggleActions: 'restart none none reverse',
    // once: true,
    
    stagger: 1
  });
});


gsap.from(".smart h1", {
  duration: 0.5,
  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".smart",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",

 
  }
});

gsap.from(".smart p", {
  duration: 0.5,
  y: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".smart",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",

 
  }
});
gsap.from(".line", {
  duration: 0.5,

 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".smart",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",

 
  }
});



gsap.from(".payo  h3", {
  duration: 0.5,
  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".payo ",
      // toggleActions:"restart none none none",
      start:"30% 70%",
      end:"30% 50% ",

  }
});


gsap.from(".payo  p", {
  duration: 0.5,
  y: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".payo ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      end:"30% 50% ",

 
  }
});

gsap.from(".payo  img", {
  duration: 0.5,
  x: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".payo ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",

      
 
  }

});

gsap.from(".design img", {
  duration: 0.5,
  x: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".design ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",

      
 
  }
});

gsap.from(".txtr h1", {
  duration: 0.5,
  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".txtr ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",

      
 
  }
});
gsap.from(".txtr p", {
  duration: 0.5,
  x: -50,
  delay: 0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".txtr ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",

      
 
  }
});
gsap.from(".txtr button", {
  duration: 0.5,
  delay: 0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".txtr ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",

      
 
  }
})

gsap.from(".app-title h1", {
  duration: 0.5,
  
  y: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".app-title ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",

      
 
  }
})
gsap.from(".app-title p", {
  duration: 0.5,
  delay: 0.5,
  y: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".app-title ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",

      
 
  }
})


const appFlex = gsap.utils.toArray('.services ');

appFlex.forEach((services , i) => {
  const anim = gsap.from(services , {autoAlpha: 0, y: -50});
  ScrollTrigger.create({
    trigger: services ,
    start:"top, 70%",
    end:"top, 100%",
    animation: anim,
    // toggleActions: 'restart none none reverse',
    // markers: true,
    // once: true,
    
    stagger: 1
  });
});


gsap.from(".feature-service button", {
  duration: 0.5,
  delay: 0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".feature-service ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      // once:true
      
 
  }
});
gsap.from(".pricing-title h1", {
  duration: 0.5,
  y: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".pricing-title ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      // once:true
      
 
  }
});

gsap.from(".pricing-title p", {
  duration: 0.5,
  y: -50,
  delay: 0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".pricing-title ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      // once:true
      
 
  }
});
gsap.from(".cards", {
  duration: 0.5,
  y: -50,
  delay: 0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".cards ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      // once:true
      
 
  }
});



gsap.from(".features-title h1", {
  duration: 0.5,
  y: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".features-title ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      // once:true
      
 
  }
});
gsap.from(".features-title p", {
  duration: 0.5,
  delay: 0.5,
  x: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".features-title ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      // once:true
      
 
  }
});

gsap.from(".bg-img", {
  duration: 0.5,
  x: -50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".bg-img ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      once:true
      
 
  }
});

gsap.from(".wrap-testmnl", {
  duration: 0.5,
  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".wrap-testmnl",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      once:true
      
 
  }
});



gsap.from(".user-img  img", {
  duration: 0.5,
 scale:-2,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".bg-img ",
      // toggleActions:"restart none none reverse",
      start:"30% 70%",
      once:true
      
 
  }
});


gsap.from(".imgright", {
  duration: 0.5,

  y: 50,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".imgright ",
      // toggleActions:"restart none none reverse",
      start:"10% 70%",
      // markers:true
      
 
  }
});

gsap.from(".imgleft", {
  duration: 0.5,
  rotate: 20,
  x: 50,
  delay:0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".imgleft ",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});


gsap.from(".faq-title h1", {
  duration: 0.5,
  y: 50,
  delay:0.2,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".faq-title ",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});

gsap.from(".faq-title p", {
  duration: 0.5,
  y: 50,
  delay:0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".faq-title ",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});


gsap.from(".faq-sub-title", {
  duration: 0.5,
  delay:0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".faq-sub-title ",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});

gsap.from(".faq-sub-title h2", {
  duration: 0.5,
  y: 50,
  delay:0.2,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".faq-sub-title ",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});
gsap.from(".faq-sub-title p", {
  duration: 0.5,
  y: 50,
  delay:0.5,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".faq-sub-title ",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});


const accord = gsap.utils.toArray('.accordion ');

accord.forEach((accordion , i) => {
  const animee = gsap.from(accordion , {autoAlpha: 0, x: -50});
  ScrollTrigger.create({
    trigger: accordion ,
    start:"top, 70%",
    end:"top, 100%",
    animation: animee,
    // toggleActions: 'restart none none reverse',
    // once: true,
    
    stagger: 1
  });
});


gsap.from(".download-title h1", {
  duration: 0.5,
  x: -50,

 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".download-title",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});
gsap.from(".download-title p", {
  duration: 0.5,
  y: -50,
  delay:0.2,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".download-title",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});
gsap.from(".dow-img", {
  duration: 0.5,
  y: -50,
  delay:0.2,
 autoAlpha:0,

  
  scrollTrigger:{
      trigger:".dow-img",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});


gsap.from(".illustartion", {
  duration: 0.5,
 
  delay:0.2,
 
 autoAlpha:0,


  
  scrollTrigger:{
      trigger:".illustartion",
      // toggleActions:"restart none none reverse",
      start:"50% 70%",
      // markers:true
      
 
  }
});

gsap.from(".information , logo", {
  duration: 0.5,
 
  delay:0.2,
 
 autoAlpha:0,


  
  scrollTrigger:{
      trigger:".information",
      
      start:"50% 70%",
      
 

      
 
  }
});







// Get all elements with class 'switch label'
var switchLabels = document.querySelectorAll('.switch label');

// Loop through each switch label element
switchLabels.forEach(function(label) {
  // Add a click event listener to each label
  label.addEventListener('click', function() {
    // Find the parent element with class 'switch' and get its child 'span' element
    var switchElement = this.closest('.switch');
    var indicator = switchElement.querySelector('span');

    // Check if the clicked label has class 'right'
    if (this.classList.contains('right')) {
      // Add class 'right' to the indicator span element
      indicator.classList.add('right');
    } else {
      // Remove class 'right' from the indicator span element
      indicator.classList.remove('right');
    }
  });
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}