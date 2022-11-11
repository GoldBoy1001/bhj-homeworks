const clearButton = document.querySelector('.clear_button');
const editor = document.getElementById('editor');
let textLocalStorage = localStorage.getItem('editorText');

editor.value = textLocalStorage;
editor.addEventListener('input', function () {
   localStorage.setItem('editorText', editor.value);
});

clearButton.addEventListener('click', function () {
   editor.value = '';
   localStorage.removeItem('editorText');
});

