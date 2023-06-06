const mainImage = document.querySelector(".mainImage"),
  clickImage = document.querySelectorAll(".clickImage"),
  nav = document.querySelectorAll(".nav-element"),
  navMouse = document.querySelectorAll(".nav-element hr"),
  button = document.querySelectorAll(".btn"),
  pcs = document.querySelector(".pieces"),
  cartPcs = document.querySelector('.count-cart-items'),
  cartImage = document.querySelector('.logo-img'),
  cartCheckout = document.querySelector('.cart-checkout'),
  cartCheckoutX = document.querySelector('.cart-checkout span'),
  cartCheckoutTotalPrice = document.querySelector('.cart-checkout b');

pcs.textContent = 0;
cartPcs.textContent = 0;

clickImage.forEach((element, index, all) => {
  element.addEventListener("click", () => {
    mainImage.src = element.src;
  });
});

nav.forEach((element, index, all) => {
  element.addEventListener("mouseover", () => {
    navMouse[index].style.display = "block";
  });
  element.addEventListener("mouseout", () => {
    navMouse[index].style.display = "none";
  });
});

button[0].addEventListener("click", () => {
  if (pcs.textContent == 0) {
    // cartPcs.style.display = 'none';
  } else {
    pcs.textContent--
    cartPcs.textContent--
  }
});

button[1].addEventListener("click", () => {
  pcs.textContent++;
  cartPcs.style.display = 'block';
  cartPcs.textContent++;
});

button[2].addEventListener("click", () => {
    cartCheckoutX.textContent = cartPcs.textContent;
    cartCheckoutTotalPrice.textContent = cartPcs.textContent * 125;
  });

cartImage.addEventListener('click' , () =>{
    console.log('lol');
    cartCheckout.style.display = 
        cartCheckout.style.display == 'flex' ? 'none' : 'flex';
})




