const body = document.querySelector('body');
const menu = document.querySelector('.menu');

body.append(menu)

body.innerHTML =
   `${body.innerHTML}
   <ul class="menu menu_main" style="margin-top: 200px">
   ${menu.innerHTML}
   </ul>`;

const menuLink = document.querySelectorAll('.menu__link');

for (let i = 0; i < menuLink.length; i++) {
   let menuItem = menuLink[i].closest('.menu__item');
   let menuSub = menuItem.querySelector('.menu_sub');
   let menuClosest = menuLink[i].closest('.menu');
   let menuSubAll = menuClosest.querySelectorAll('.menu_sub');

   if (menuSub) {
      menuLink[i].onclick = function () {
         if (!menuSub.classList.contains('menu_active')) {
            menuSubAll.forEach((element) => element.classList.remove('menu_active'));
            menuSub.classList.add('menu_active');
         } else {
            menuSub.classList.remove('menu_active');
         }
         return false;
      };
   }
}