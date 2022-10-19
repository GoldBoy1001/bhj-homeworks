
let statusHtml = document.querySelector('.status');
statusHtml.innerHTML = `${statusHtml.innerHTML} <p>Осталось времени, сек: <span class="status__timer">0</span></p>`;

class Game {
   constructor(container) {
      this.container = container;
      this.wordElement = container.querySelector('.word');
      this.winsElement = container.querySelector('.status__wins');
      this.lossElement = container.querySelector('.status__loss');
      this.timerElement = container.querySelector('.status__timer');

      this.reset();

      this.registerEvents();
      this.timer();
   }

   reset() {
      this.setNewWord();
      this.winsElement.textContent = 0;
      this.lossElement.textContent = 0;
   }

   timer() {
      clearInterval(this.timerID);
      this.symbolQuantity = Array.from(document.querySelectorAll('.symbol')).length;
      this.timerElement.textContent = this.symbolQuantity;
      let savedThis = this;
      function timerFunc() {
         if (savedThis.symbolQuantity != 0) {
            savedThis.timerElement.textContent = savedThis.symbolQuantity--;
         } else {
            savedThis.fail();
            savedThis.timer();
         }
      }
      this.timerID = setInterval(timerFunc, 1000);
   }

   registerEvents() {
      let savedThis = this;

      function keyPressFunc(event) {
         let keyText = savedThis.currentSymbol.textContent.toUpperCase();
         let keyPress = event.key.toUpperCase();
         if (keyText === keyPress) {
            savedThis.success();
         }

         if (keyText != keyPress) {
            savedThis.fail();
            savedThis.timer();
         }
      }

      window.addEventListener('keyup', keyPressFunc);
   }

   success() {
      this.currentSymbol.classList.add('symbol_correct');
      this.currentSymbol = this.currentSymbol.nextElementSibling;
      if (this.currentSymbol !== null) {
         return;
      }

      if (++this.winsElement.textContent === 10) {
         alert('Победа!');
         this.reset();
      }
      this.setNewWord();
      this.timer();
   }

   fail() {
      if (++this.lossElement.textContent === 5) {
         alert('Вы проиграли!');
         this.reset();
      }
      this.setNewWord();
   }

   setNewWord() {
      const word = this.getWord();

      this.renderWord(word);
   }

   getWord() {
      const words = [
         'bob',
         'awesome',
         'netology',
         'hello',
         'kitty',
         'rock',
         'youtube',
         'popcorn',
         'cinema',
         'love',
         'javascript'
      ],
         index = Math.floor(Math.random() * words.length);

      return words[index];
   }

   renderWord(word) {
      const html = [...word]
         .map(
            (s, i) =>
               `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
         )
         .join('');
      this.wordElement.innerHTML = html;

      this.currentSymbol = this.wordElement.querySelector('.symbol_current');
   }
}

new Game(document.getElementById('game'))