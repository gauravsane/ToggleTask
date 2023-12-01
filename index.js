const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  let counterIncrement = document.querySelectorAll(".counterClass");

let interval = 5000;

counterIncrement.forEach((counterAdd) => {
  let startValue = 0;
  let endValue = parseInt(counterAdd.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);

  let counter = setInterval(() => {
    startValue += 1;
    counterAdd.textContent = startValue;

    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration);
});



document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
          accordionContent.style.maxHeight = 0;
      }

      // Close other open accordion items
      document.querySelectorAll('.accordion-header').forEach(otherButton => {
          if (otherButton !== button) {
              otherButton.classList.remove('active');
              otherButton.nextElementSibling.style.maxHeight = 0;
          }
      });
  });
});

