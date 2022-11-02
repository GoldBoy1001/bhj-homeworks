const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const hintPosition = ['top', 'left', 'right', 'bottom'];
const allTagsA = document.getElementsByTagName('a');
let windowWidth = window.innerWidth;

function addTooltip(index) {
   let div = document.createElement('div');
   div.classList.add('tooltip');
   div.innerText = hasTooltip[index].title;
   hasTooltip[index].appendChild(div);
   allTagsA[index].removeAttribute('title');
}

function position(index, children) {
   let { top, left, right, bottom, height } = hasTooltip[index].getBoundingClientRect();
   let childrenHeight = children.getBoundingClientRect().height;
   let childrenWidth = children.getBoundingClientRect().width;
   let positionOnPage;
   if (hasTooltip[index].dataset.position === 'top') {
      positionOnPage = `left: ${left}px; top: ${top - childrenHeight - 2}px`;
   }
   if (hasTooltip[index].dataset.position === 'left') {
      if ((left - childrenWidth - 2) < 0) {
         hasTooltip[index].dataset.position = 'bottom';
         positionOnPage = `left: ${left}px; top: ${bottom + 2}px`;
      } else {
         positionOnPage = `left: ${left - childrenWidth - 2}px; top: ${top - ((childrenHeight - height) / 2)}px`;
      }
   }
   if (hasTooltip[index].dataset.position === 'right') {
      positionOnPage = `left: ${right + 2}px; top: ${top - ((childrenHeight - height) / 2)}px`;
   }
   if (hasTooltip[index].dataset.position === 'bottom') {
      positionOnPage = `left: ${left}px; top: ${bottom + 2}px`;
   }
   children.style = positionOnPage;
}

for (let i = 0; i < hasTooltip.length; i++) {
   addDataset(i);
   addTooltip(i);

   let children = hasTooltip[i].querySelector('.tooltip');

   hasTooltip[i].addEventListener('click', function (evtent) {
      evtent.preventDefault();
      if (children.classList.contains('tooltip_active')) {
         children.classList.remove('tooltip_active');
      } else {
         hasTooltip.forEach(element => element.querySelector('div.tooltip').classList.remove('tooltip_active'));
         children.classList.add('tooltip_active');
      }
      position(i, children);
   });

   window.addEventListener('scroll', function () {
      position(i, children);
   });
}

function addDataset(index) {
   randomPosition = Math.floor(Math.random() * hintPosition.length);
   hasTooltip[index].dataset.position = hintPosition[randomPosition];
}