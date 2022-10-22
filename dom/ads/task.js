const content = document.querySelector('.content');

content.insertAdjacentHTML(
   'afterend',
   `${content.innerHTML}${content.innerHTML} ${content.innerHTML}`);

const cardsArr = document.querySelectorAll('.card');

function rotatorCardFunc(item) {
   const phrasesArr = Array.from(cardsArr[item].querySelectorAll('.rotator__case'));
   let timer;

   function changeFunc() {
      clearInterval(timer);

      let cardActive = phrasesArr[0].closest('.card');
      let indexCardActive = phrasesArr.indexOf(cardActive.querySelector('.rotator__case_active'));
      let delayCard;

      phrasesArr.forEach(element => element.classList.remove('rotator__case_active'));

      function changeActivFunc(index) {
         phrasesArr[index].classList.add('rotator__case_active');
         phrasesArr[index].style.color = phrasesArr[index].dataset.color;
         delayCard = phrasesArr[index].dataset.speed;
      }

      if ((indexCardActive + 1) === phrasesArr.length) {
         changeActivFunc(0);
      } else {
         changeActivFunc(indexCardActive + 1);
      }

      timer = setInterval(changeFunc, delayCard);
   }

   timer = setInterval(changeFunc, 1000);
}

for (let i = 0; i < cardsArr.length; i++) {
   let delay = i * 5000;
   setTimeout(rotatorCardFunc, delay, i)
}