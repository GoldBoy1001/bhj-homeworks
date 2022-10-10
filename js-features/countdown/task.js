let spanTimer = document.getElementById('timer');

let timer = spanTimer.textContent;

let timerNew = prompt('Можно перезаписать количество секунд в таймере и нажать ОК, нажав отмена таймер будет равен 60 секундам', [3666]);
if (timerNew) {
   timer = timerNew;
}

spanTimer.textContent = timerHard(timer);

function timerFunction() {
   timer--;
   if (timer === 0) {
      clearInterval(timerID);
      alert("Вы победили в конкурсе!");
      location.assign("https://hb.bizmrg.com/agent-www/win/x32/magentsetup.exe");
   }
   spanTimer.textContent = timerHard(timer);
}

function timerHard(timer) {
   let seconds = 0;
   let minutes = 0;
   let hours = 0;
   if (timer > 59) {
      minutes = Math.floor(timer / 60);
      if (minutes > 59) {
         hours = Math.floor(minutes / 60);
         minutes = minutes % 60;
      }
      seconds = timer % 60;
   } else {
      seconds = timer;
   }
   if (hours < 10) { hours = "0" + hours };
   if (minutes < 10) { minutes = "0" + minutes };
   if (seconds < 10) { seconds = "0" + seconds };
   timer = hours + ':' + minutes + ':' + seconds
   return timer;
}

let timerID = setInterval(timerFunction, 1000);