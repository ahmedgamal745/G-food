  const menBtn= document.getElementById("menu-btn");
  const navbar= document.getElementById("navbar");
  const menu= document.querySelector('.menu');


  const offset = 50;



  menBtn.addEventListener('click', () =>{
    menu.classList.toggle('menu-open');
  })

  window.addEventListener("scroll", () =>{
    if (pageYOffset > offset){
      navbar.classList.add('navbar-active')
    }else {
      navbar.classList.remove('navbar-active')
    }
  })

    let tabs = document.querySelectorAll(".tabs .col-md-2")
    let tabsArray = Array.from(tabs)
    let divs = document.querySelectorAll(".content > div")
    let divsArray = Array.from(divs)

    tabsArray.forEach((ele)=> {
      ele.addEventListener("click", function(e){
        tabsArray.forEach((ele)=> {
          ele.classList.remove("active")
        })
          e.currentTarget.classList.add("active");
          divsArray.forEach((div)=>{
            div.style.display = "none"
          })
          document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
        
      })
    })

// /.........cartSumPrice.........cartSumPrice............./ 

let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
	productsInCart = [];
}
 const parentElement = document.querySelector("#buyItems")
 const cartSumPrice = document.querySelector("#sum-prices")
 const products = document.querySelectorAll('.card')

  



 

    const countTheSumPrice = function(){
      let sumPrice = 0;
      productsInCart.forEach(product => {
        sumPrice += product.price
      })
      console.log(sumPrice);
      return sumPrice
      
    }
    
  
 const updateShoppingCartHTML = function(){
  localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    if(productsInCart.length > 0){
      let result = productsInCart.map(product=>{
        return `
        <li class="buyItem">
                            <img src="${product.image}">
                            <div>
                                <h5>${product.name}</h5>
                                <h6>${product.price}</h6>
                                <div>
                                    <button class = "button-minus" data-id='${product.id}'>-</button>
                                    <span class="countOfProduct">${product.count}</span>
                                    <button class = "button-plus" data-id='${product.id}' >+</button>
                                </div>
                            </div>
                        </li>
        `
      })
      parentElement.innerHTML = result.join('')
      document.querySelector('.checkout').classList.remove('hidden')
      cartSumPrice.innerHTML = "$" + countTheSumPrice();
    }
    else{
      document.querySelector('.checkout').classList.add('hidden')
      parentElement.innerHTML = `<h4 class="empty">Your shopping cart is empty</h4>`
      cartSumPrice.innerHTML = "";
    }
   
 }



















 function updateProductsInCart(product){
  for (let i = 0; i < productsInCart.length; i++){
    if(productsInCart[i].id == product.id){
      productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
    }
  }
  productsInCart.push(product)
  
 }









 products.forEach(product=>{
  product.addEventListener("click", (e)=>{
    
    if(e.target.classList.contains('addToCart')){
      const productID = e.target.dataset.productId;
      const productName = product.querySelector('.productName').innerHTML;
      const productPrice = product.querySelector('.price').innerHTML;
      const productImage = product.querySelector('img').src;
      let productsToCart ={
        name : productName,
        image : productImage,
        id : productID,
        count : 1,
        price : +productPrice,
        basePrice : +productPrice

      }
      updateProductsInCart(productsToCart)
      updateShoppingCartHTML();

    }
  })
 })

 parentElement.addEventListener('click', (e) => { // Last
	const isPlusButton = e.target.classList.contains('button-plus');
	const isMinusButton = e.target.classList.contains('button-minus');
	if (isPlusButton || isMinusButton) {
		for (let i = 0; i < productsInCart.length; i++) {
			if (productsInCart[i].id == e.target.dataset.id) {
				if (isPlusButton) {
					productsInCart[i].count += 1
				}
				else if (isMinusButton) {
					productsInCart[i].count -= 1
				}
				productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

			}
			if (productsInCart[i].count <= 0) {
				productsInCart.splice(i, 1);
			}
		}
		updateShoppingCartHTML();
	}
});

updateShoppingCartHTML






/////////////////////////////// button


function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);






function loader(){
  document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut;






var swiper = new Swiper(".mySwipers", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});









var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });


  
  
  
  
 
  

