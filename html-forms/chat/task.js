const chatOpen = document.querySelector('.chat-widget');
const chatScroll = chatOpen.querySelector('.chat-widget__messages-container');
const chatInput = document.getElementById('chat-widget__input');
let counter = 0;
let timeInaction;

const botMessages = [
   'Мы рады, что вы здесь. Бла-бла-бла.',
   'Кто тут?',
   'Что нужно?',
   'Хотите что-то узнать?',
   'Google в помощь!',
   'Вы правда думаете, что я могу помочь?',
   'Будете спрашивать?!',
   'Не факт, что вам ответят.',
   'Поищете в другом месте!',
   'Предагаю спросить у кото-то другого',
   'Своих мозгов не хватает?',
   'Читайте книги, милейший!',
   'Очень надо мне свой ИИ напрягать',
   '...',
   'Вы ещё здесь?',
];

chatOpen.querySelector('.chat-widget__side').style.cursor = 'pointer';
chatInput.setAttribute('required', null);
chatInput.setAttribute('maxlength', 50);

chatOpen.addEventListener('click', function (event) {
   event.stopPropagation();
   chatOpen.classList.add('chat-widget_active');
   inaction();
});

window.addEventListener('click', function (event) {
   event.stopPropagation();
   chatOpen.classList.remove('chat-widget_active');
   clearInterval(timeInaction);
});

function sendMessagesClient(text, classClient) {
   const messages = document.querySelector('.chat-widget__messages');
   let dataTime = new Date().toLocaleTimeString().substring(0, 8);

   messages.innerHTML += `
    <div class="message ${classClient}">
    <div class="message__time">${dataTime}</div>
    <div class="message__text">
        ${text}
    </div>
    </div>
    `;
   scrollMessages();
}

function sendMessagesBot() {
   if (counter === 0) {
      sendMessagesClient(botMessages[0]);
   } else {
      sendMessagesClient(botMessages[randomMessage(1, botMessages.length - 1)]);
   }
   counter++;
}

function randomMessage(min, max) {
   return Math.floor(min + Math.random() * (max + 1 - min));
}

function scrollMessages() {
   let bottomMessages = document
      .querySelector('.chat-widget__messages')
      .getBoundingClientRect().bottom;
   let bottomChat = chatScroll.getBoundingClientRect().bottom;
   if (bottomMessages > bottomChat) {
      chatScroll.scrollBy(0, bottomMessages - bottomChat + 10);
   }
}

function inaction() {
   clearInterval(timeInaction);
   timeInaction = setInterval(sendMessagesBot, 30000);
}

chatInput.addEventListener('keyup', function (event) {
   let keyCode = event.code;
   if ((keyCode === 'Enter' || keyCode === 'NumpadEnter') && chatInput.checkValidity()) {
      sendMessagesClient(chatInput.value, 'message_client');
      chatInput.value = '';
      sendMessagesBot();
   }
   inaction();
});