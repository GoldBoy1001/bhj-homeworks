const book = document.getElementById('book');
const bookControls = Array.from(book.querySelectorAll('.font-size'));
const bookControlsColor = Array.from(book.querySelector('.book__control_color').querySelectorAll('.color'));
const bookControlsColorBackground = Array.from(book.querySelector('.book__control_background').querySelectorAll('.color'));

function changeActiveBookmark(event, arr, index, activeClass) {
   event.preventDefault();
   arr.forEach(element => element.classList.remove(activeClass));
   arr[index].classList.add(activeClass);
}

for (let i = 0; i < bookControls.length; i++) {
   bookControls[i].addEventListener('click', function (event) {
      changeActiveBookmark(event, bookControls, i, 'font-size_active');
      let sizeFont = bookControls[i].dataset.size;
      conditions(sizeFont, 'small', undefined, 'big', 'no-class', 'book_fs-big', 'book_fs-small');
   });

   bookControlsColor[i].addEventListener('click', function (event) {
      changeActiveBookmark(event, bookControlsColor, i, 'color_active');
      let textColor = bookControlsColor[i].dataset.textColor;
      conditions(textColor, 'black', 'whitesmoke', 'gray', 'book_color-whitesmoke', 'book_color-gray', 'book_color-black');
   });

   bookControlsColorBackground[i].addEventListener('click', function (event) {
      changeActiveBookmark(event, bookControlsColorBackground, i, 'color_active');
      let backGrColor = bookControlsColorBackground[i].dataset.bgColor;
      conditions(backGrColor, 'black', 'white', 'gray', 'book_bg-white', 'book_bg-gray', 'book_bg-black');
   });
}

function conditions(value, firstArt, secondAtr, thirdAtr, firstClass, secondClass, thirdClass) {
   if (value === firstArt) {
      switchClasses(firstClass, secondClass, thirdClass);
   }
   if (value === secondAtr) {
      switchClasses(thirdClass, secondClass, firstClass);
   }
   if (value === thirdAtr) {
      switchClasses(thirdClass, firstClass, secondClass);
   }
}

function switchClasses(delFirstClass, delSecondClass, addClass) {
   book.classList.remove(delFirstClass, delSecondClass);
   book.classList.add(addClass);
}
