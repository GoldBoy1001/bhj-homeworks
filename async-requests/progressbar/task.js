const progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', function (evt) {
   let formData = new FormData(form);
   let xhr = new XMLHttpRequest();
   xhr.upload.onprogress = function (event) {
      progress.value = event.loaded / event.total;
   };

   xhr.onprogress = function (event) {
      console.log('Загружено ' + (event.loaded / 1024 / 1024).toFixed(2) + ' МБ');
   };

   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
   xhr.send(formData);

   evt.preventDefault();
});