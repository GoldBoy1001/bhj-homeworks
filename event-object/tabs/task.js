const tabs1 = document.getElementById('tabs1');

function changeTab(index) {
   let tabs = Array.from(index.querySelectorAll('.tab'));
   let tabContent = Array.from(index.querySelectorAll('.tab__content'));

   for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function () {
         tabs.forEach((element) => element.classList.remove('tab_active'));
         tabContent.forEach((element) => element.classList.remove('tab__content_active'));
         tabs[i].classList.add('tab_active');
         tabContent[i].classList.add('tab__content_active');
      });
   }
}

changeTab(tabs1);