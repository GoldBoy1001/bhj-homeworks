const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', function () {
   if (!dropdownList.classList.contains('dropdown__list_active')) {
      dropdownList.classList.add('dropdown__list_active');
   } else {
      dropdownList.classList.remove('dropdown__list_active');
   }
});

for (item of dropdownItem) {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      dropdownValue.innerText = this.innerText;
      dropdownList.classList.remove('dropdown__list_active');
   })
}

