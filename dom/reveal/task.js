let reveals = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function () {
   let sizeWindow = window.innerHeight;
   for (let i = 0; i < reveals.length; i++) {
      let { bottom, top } = reveals[i].getBoundingClientRect();
      if ((top > 0 || (bottom > 0 && bottom < sizeWindow)) && top < sizeWindow && !reveals[i].classList.contains('reveal_active')) {
         reveals[i].classList.add('reveal_active');
      }
   }
});