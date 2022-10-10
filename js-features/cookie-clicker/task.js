const image = document.getElementById('cookie');

let timer = Date.now();
let flag = 0;
let counter = 0;

function sizeChange() {
   counter += 1;
   let clickTimer = Date.now();
   if (flag === 0) {
      flag = 1;
      image.width += 100;
   }
   else {
      flag = 0;
      image.width -= 100;
   }
   document.getElementById('clicker__counter').textContent = counter + '\n' + 'Скорость клика: ' + ((clickTimer - timer) / 1000).toFixed(2) + ' сек.';
   timer = Date.now();
}

image.onclick = sizeChange;

