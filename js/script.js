// sticky navbar

const mainNav = document.querySelector(".main-nav")
const mainNavOffset = mainNav.offsetTop

window.addEventListener('scroll', () => {
  if(window.pageYOffset >= mainNavOffset + 50) {
    mainNav.classList.add("fixy")
  }else {
    mainNav.classList.remove("fixy")
  }
})



// hamburger section
const hamburger = document.querySelector(".open-menu")
const hamburgerIcon = document.querySelector(".open-menu i")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", ()=>{
  navbar.classList.toggle("open-nav-menu")
  const isOpen = navbar.classList.contains("open-nav-menu")

  hamburgerIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu'
})


// header swiper section

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  // },
  // on: {
  //   autoplayTimeLeft(s, time, progress) {
  //     progressCircle.style.setProperty("--progress", 1 - progress);
  //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  }
});



// counters

// Function to start the counter animation

let valueDisplays = document.querySelectorAll(".counter span");
let interval = 5000;

function startCounterAnimation() {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-count"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
      startValue += 1
      valueDisplay.textContent = startValue
      if (startValue == endValue) {
        clearInterval(counter)
      }
    }, duration);
  })
}

  // Function to check if an element is in the viewport

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event
  function handleScroll() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      if (isElementInViewport(counter) && !counter.classList.contains('counted')) {
        counter.classList.add('counted');
        startCounterAnimation();
      }
    });
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', handleScroll);
  

  

  // Testimonial swiper 

  
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Year update

const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear





