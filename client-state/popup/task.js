const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = subscribeModal.querySelector('.modal__close');

if (getCookie('subscribeModal') != 'true') {
   subscribeModal.classList.add('modal_active');
}

modalClose.addEventListener('click', function () {
   document.cookie = 'subscribeModal=true';
   subscribeModal.classList.remove('modal_active');
});

function getCookie(key) {
   const cookies = document.cookie.split('; ');
   const cookie = cookies.find((element) => element.startsWith(key + '=')) || '';
   const value = decodeURIComponent(cookie.substring(key.length + 1));
   return cookie ? value : null;
}