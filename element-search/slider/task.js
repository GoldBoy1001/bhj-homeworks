const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
const sliders = document.querySelectorAll('.slider__item');
const sliderArrows = document.querySelector('.slider__arrows');

let sliderNumber = 0;

const nextNodeSliderArrows = sliderArrows.nextSibling;
const nextNodeTwoSliderArrows = nextNodeSliderArrows.nextSibling;
const nextNodeThreeSliderArrows = nextNodeTwoSliderArrows.nextSibling;
const comment = nextNodeThreeSliderArrows.nextSibling;

sliderArrows.insertAdjacentHTML(
   'afterend',
   `${comment.data}`
);

const slidersDots = document.querySelectorAll('.slider__dot');

function sliderActive(number) {
   sliders.forEach(element => element.classList.remove('slider__item_active'));
   sliders[number].classList.add('slider__item_active');

   slidersDots.forEach(element => element.classList.remove('slider__dot_active'));
   slidersDots[number].classList.add('slider__dot_active');
}

leftArrow.onclick = function () {
   if (sliderNumber === 0) {
      sliderNumber = (sliders.length - 1);
   } else {
      sliderNumber--;
   }
   sliderActive(sliderNumber);
}

rightArrow.onclick = function () {
   if (sliderNumber === (sliders.length - 1)) {
      sliderNumber = 0;
   } else {
      sliderNumber++;
   }
   sliderActive(sliderNumber);
}

for (let i = 0; i < slidersDots.length; i++) {
   slidersDots[i].onclick = function () {
      sliderActive(i);
      console.log(sliderActive(i));

      sliderNumber = i;
   }
}