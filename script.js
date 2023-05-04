// NAVBAR SECTION
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');


menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})

// END OF NAVBAR


// START OF VIDEO SECTION

const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = 'fas fa-pause-circle'
        video.style.opacity = '.7'

    }else {
        video.pause()
        btn.className = 'fas fa-play-circle'
        video.style.opacity = '.3'

    }
    
}

btn.addEventListener('click', () => {
    playPause()
})


// video bar section
video.addEventListener('timeupdate', () =>{
    const barwidth = video.currentTime / video.duration
    bar.style.width = `${barwidth * 100}%`
    if(video.ended) {
        btn.className = 'fas fa-play-circle'
        video.style.opacity = '.3'
    }
})

// end of video bar section


// swiper section
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  });






const cards = document.querySelectorAll(".pricing-card-front");

function flipCard() {

    // "unflip" all cards other than the one clicked
    cards.forEach((card) => {
      if(card != this) {
        card.classList.remove('is-flipped');
      }
    });
    
    this.classList.toggle('is-flipped');
};

cards.forEach((card) =>card.addEventListener("click", flipCard));

// EMD OF VIDEO SECTION