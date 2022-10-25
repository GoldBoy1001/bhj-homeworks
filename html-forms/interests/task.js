const arrInterestCheck = document.querySelectorAll('.interest__check');
for (let i = 0; i < arrInterestCheck.length; i++) {
   arrInterestCheck[i].addEventListener('change', function () {
      let childCheckbox = arrInterestCheck[i].closest('.interest').querySelectorAll('.interests_active .interest__check');
      if (arrInterestCheck[i].checked) { childCheckbox.forEach(element => element.checked = true) };
      if (!arrInterestCheck[i].checked) { childCheckbox.forEach(element => element.checked = false) };
      let interestsActive = arrInterestCheck[i].closest('.interests_active');
      if (interestsActive) {
         changeCheckbox(interestsActive);
         let insertedInterestsActive = interestsActive.closest('.interest').querySelector('label > .interest__check').closest('.interests_active');
         if (insertedInterestsActive) {
            changeCheckbox(insertedInterestsActive)
         };
      };
   });
}

function changeCheckbox(interestsActive) {
   const progenitorCheckbox = interestsActive.closest('.interest');
   const parentCheckbox = progenitorCheckbox.querySelector('label > .interest__check');
   const neighborCheckbox = Array.from(interestsActive.querySelectorAll('.interest__check'));

   let arrChildCheckbox = [];

   neighborCheckbox.forEach(element => arrChildCheckbox.push(element.checked));
   let checkboxOn = arrChildCheckbox.includes(true);
   let checkboxOff = arrChildCheckbox.includes(false);

   if (checkboxOn && checkboxOff) {
      parentCheckbox.indeterminate = true;
      parentCheckbox.checked = true;
   }
   if (checkboxOn && !checkboxOff) {
      parentCheckbox.indeterminate = false;
      parentCheckbox.checked = true;
   }
   if (!checkboxOn && checkboxOff) {
      parentCheckbox.indeterminate = false;
      parentCheckbox.checked = false;
   }
}