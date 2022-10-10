let hit = document.getElementById('dead');
let miss = document.getElementById('lost');

for (let index = 1; index < 10; index++) {
   getHole = index => document.getElementById(`hole${index}`);

   getHole(index).onclick = function () {
      let alertMessage;
      if (getHole(index).classList.contains('hole_has-mole')) {
         hit.textContent++;
      } else {
         miss.textContent++;
      }
      if (miss.textContent === '5') {
         alertMessage = 'Не повезло. Попробуйте еще раз.';
         setTimeout(getAlertMessage, 100);
      }
      if (hit.textContent === '10') {
         alertMessage = 'Поздравляю! Вы настоящий кротобой.';
         setTimeout(getAlertMessage, 100);
      }
      function getAlertMessage() {
         alert(alertMessage);
         miss.textContent = 0;
         hit.textContent = 0;
      }
   };
}