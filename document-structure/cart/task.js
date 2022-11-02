const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');
const product = Array.from(document.querySelectorAll('.product'));
const localCart = JSON.parse(localStorage.getItem('cart'));
let cartProduct = document.getElementsByClassName('cart__product');

if (cartProduct.length === 0) {
   cart.style.display = 'none';
}

for (let i = 0; i < product.length; i++) {
   let minus = product[i].querySelector('.product__quantity-control_dec');
   let plus = product[i].querySelector('.product__quantity-control_inc');
   let value = product[i].querySelector('.product__quantity-value');
   let productAdd = product[i].querySelector('.product__add');
   let valueText = value.innerText;
   let valueImg = product[i].querySelector('.product__image');
   let img = valueImg.src;
   let productId = product[i].dataset.id;

   minus.addEventListener('click', function () {
      if (valueText > 1) {
         valueText--;
         value.innerText = valueText;
      }
   });

   plus.addEventListener('click', function () {
      valueText++;
      value.innerText = valueText;
   });

   productAdd.addEventListener('click', function () {
      if (cart.style.display === 'none') {
         cart.style.display = 'block';
      }

      let productCart = cartProducts.querySelector(
         `.cart__product[data-id="${productId}"]`
      );

      if (productCart) {
         let cartProductCount = productCart.querySelector('.cart__product-count');
         let count = +cartProductCount.innerText;
         let newCount = +valueText + count;
         cartProductCount.innerText = newCount;
         cartImgAnimation(valueImg, img, productId);
         updateLocalStorage(null, productId, img, newCount);
      } else {
         htmlCartProductAdd(productId, img, valueText);
         updateLocalStorage(null, productId, img, valueText);
         cartProductRemote();
         cartImgAnimation(valueImg, img, productId);
      }
   });
}

function htmlCartProductAdd(productId, img, valueText) {
   let html = `
    <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${valueText}</div>
    </div>
    `;

   cartProducts.insertAdjacentHTML('afterBegin', html);
}

function cartProductRemote() {
   let productCarts = cartProducts.querySelectorAll('.cart__product');
   productCarts[0].addEventListener('click', function (evt) {
      let dataId = productCarts[0].dataset.id;
      updateLocalStorage(dataId);
      productCarts[0].remove();
      if (cartProduct.length === 0) {
         cart.style.display = 'none';
      }
   });
}

function cartImgAnimation(valueImg, img, productId) {
   let productCart = cartProducts.querySelector(
      `.cart__product[data-id="${productId}"]`
   );
   let { top, left } = valueImg.getBoundingClientRect();
   let topCart = productCart.getBoundingClientRect().top;
   let leftCart = productCart.getBoundingClientRect().left;
   let count = 1;
   let countMax = 15;
   let differenceTop = (top - topCart) / countMax;
   let differenceLeft = (leftCart - left) / countMax;
   let newTop = top - differenceTop;
   let newLeft = left + differenceLeft;
   let htmlImg = `
        <img class="cart__product-image delete" style="position: fixed; top: ${top}px; left: ${left}px;" src="${img}">
    `;
   cartProducts.insertAdjacentHTML('afterEnd', htmlImg);
   let imgAnimation = cart.querySelector('.delete');
   let intervalID = setInterval(
      function () {
         imgAnimation.style.top = newTop + 'px';
         imgAnimation.style.left = newLeft + 'px';
         newTop = newTop - differenceTop;
         newLeft = newLeft + differenceLeft;
         if (count === countMax) {
            clearInterval(intervalID);
            imgAnimation.remove();
         }
         count++;
      },
      15,
      count
   );
}

function updateLocalStorage(del, productId, img, valueText) {
   let cart = JSON.parse(localStorage.getItem('cart'));

   if (cart != null && productId != null) {
      const productAdd = cart.findIndex((entry) => entry.productId === productId);
      if (productAdd != -1) {
         cart.splice(productAdd, 1, { productId, img, valueText });
      } else {
         cart.push({ productId, img, valueText });
      }
   }

   if (cart === null && productId != null) {
      cart = [{ productId, img, valueText }];
   }

   if (cart != null && del != null) {
      const product = cart.find((entry) => entry.productId === del);
      cart.splice(cart.indexOf(product), 1);
   }

   localStorage.setItem('cart', JSON.stringify(cart));
}


