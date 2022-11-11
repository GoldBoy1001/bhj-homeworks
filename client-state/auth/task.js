const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const localUserId = localStorage.getItem('userId');
const signOut = document.getElementById('sign__out');

function authorization(id) {
   signin.classList.toggle('signin_active');
   welcome.classList.toggle('welcome_active');
   userId.innerText = id;
}

if (localUserId != null) {
   authorization(localUserId);
}

form.addEventListener('submit', function (event) {
   let formData = new FormData(form);
   let xhr = new XMLHttpRequest();
   xhr.responseType = 'json';
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);
   xhr.send(formData);

   xhr.addEventListener('load', () => {
      let auth = xhr.response;

      if (auth.success) {
         localStorage.setItem('userId', auth.user_id);
         authorization(auth.user_id);
      } else {
         alert('Неверный логин/пароль');
         form.reset();
      }
   });
   event.preventDefault();
});

signOut.addEventListener('click', function () {
   localStorage.removeItem('userId');
   authorization(null);
   form.reset();
});
