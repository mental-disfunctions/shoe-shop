document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const carousel = document.querySelector('.newshoe__carousel');

  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.newshoe__carousel div').length;

  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  function updateCarousel() {
    const itemWidth = document.querySelector('.newshoe__carousel div').offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});


var ad_detector = document.getElementById("ad?");
var ad_joke = ad_detector && (ad_detector.style.display != 'none') && (ad_detector.width * ad_detector.height)