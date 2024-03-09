
// search nav 
document.querySelector(".main-search").onclick = function(){
  document.querySelector(".nav-search").classList.add("open");
}
document.querySelector(".xmark").onclick = function(){
 document.querySelector(".nav-search").classList.remove("open");
}

// user nav

document.querySelector(".user").onclick = function(){
    document.querySelector(".nav-user").classList.add("open");
}

document.querySelector(".xmark-user").onclick = function(){
    document.querySelector(".nav-user").classList.remove("open");
}


// 


var swiper = new Swiper('.home-right', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide',
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });


  var swiper = new Swiper('.tetimonails-content ', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide',
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      }
    }
  });


//   dark && ligth mode

document.querySelector(".moon").onclick = function(){
    document.querySelector("body").classList.add("dark");
    document.querySelector(".moon").style.display = 'none'
    document.querySelector(".sun").style.display = 'block'
}
document.querySelector(".sun").onclick = function(){
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".moon").style.display = 'block'
    document.querySelector(".sun").style.display = 'none'
}