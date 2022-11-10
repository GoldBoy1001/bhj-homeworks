const loader = document.getElementById('loader');
const items = document.getElementById('items');
let localValute = JSON.parse(localStorage.getItem('valute'));

const url = 'https://netology-slow-rest.herokuapp.com';

if (localValute != null) {
   loader.classList.remove('loader_active');
   for (let i in localValute) {
      htmlAdd(localValute[i]);
   }
}

function request(method, u) {
   return fetch(u).then(response => {
      return response.json()
   })
}

request('GET', url)
   .then(data => {
      loader.classList.remove('loader_active');
      localStorage.setItem('valute', JSON.stringify(data.response.Valute));
      items.innerHTML = '';
      for (let i in data.response.Valute) {
         htmlAdd(data.response.Valute[i]);
      }
   }).catch(err => err)

function htmlAdd(value) {
   let html = `
    <div class="item">
        <div class="item__code">
            ${value.CharCode}
        </div>
        <div class="item__value">
            ${value.Value}
        </div>
        <div class="item__currency">
            руб.
        </div>
    </div>
    `;
   items.insertAdjacentHTML('afterBegin', html);
}
