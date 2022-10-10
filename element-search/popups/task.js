const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');


function modalCloseFunc() {
   modalMain.classList.remove('modal_active');
   modalSuccess.classList.remove('modal_active');
}

for (let i = 0; i < modalClose.length; i++) {
   modalClose[i].addEventListener('click', modalCloseFunc);
}

showSuccess.onclick = function () {
   modalSuccess.classList.add('modal_active');
};