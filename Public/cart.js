let carts = document.querySelectorAll(".add-me"); 
let products = 
/*[
{
	name: '[2CD SET)TXT (TOMORROWXTOGETHER)',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000063/GD00062657.default.1.png',
	price1: 120,
	inCart: 0
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: 'd',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: 'd',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name :'',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',					
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},
{
	name: '',
	tag: '',
	price1: ,
	inCart: 
},



] */

for (let i=0; i < carts.length; i++){
	carts[i].addEventListener("click", () =>{
		cartNumber(products[i]);
		totalCost(products[i]);
	})
}

function onLoadCartNumbers(){
	
	let productNumbers = localStorage.getItem("cartNumber");
	
	if(productNumbers){
	document.querySelector("span").textContent = productNumbers;
	}
	
}	



function cartNumber(products){
	
	let productNumbers = localStorage.getItem("cartNumber");
	productNumbers = parseInt(productNumbers);
	if( productNumbers){		
	localStorage.setItem("cartNumber", productNumbers + 1);
	document.querySelector("span").textContent = productNumbers + 1;
	}
	else
	{
		localStorage.setItem("cartNumber", 1);
		document.querySelector("span").textContent = 1;
	}
	setItems(products);	
}

function setItems(products) {
	let cartItems = localStorage.getItem("productsInCart");
		cartItems = JSON.parse(cartItems);
	
	if(cartItems != null){
		
		if(cartItems[products.tag] == undefined){
			cartItems = {
				...cartItems,
				[products.tag]: products
			}
		}
		cartItems[products.tag].inCart += 1;
	} else {
		products.inCart = 1;
		cartItems = {
			[products.tag]: products
		}	
	}	
	
	localStorage.setItem("productsInCart", JSON.stringify
	(cartItems));
}

function totalCost(products){
	//console.log("The product price is", products.price1);
	let cartCost = localStorage.getItem("totalCost");
	
	console.log("My cartCost is", cartCost);
	
	if(cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + products.price1);
	} else {
		localStorage.setItem("totalCost", products.price1);
	}
}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".product1");
	let cartCost=localStorage.getItem("totalCost");
		
	if(cartItems && productContainer){
			productContainer.innerHTML = "";
			Object.values(cartItems).map(item => {
				productContainer.innerHTML += `

				<div class="product1">
					<i  class="fas fa-trash-alt"></i>
					
					${item.name}<img src="./images/${item.tag}.jpg" class="naughtyimage">
				</div>
				<div class="price1">
					<span>Item Price: PHP ${item.price1} </span>
				</div>
				<div class="quantity">
					<span>Quantity: ${item.inCart}x</span>
				</div>

				<div class="total">TOTAL: PHP ${item.inCart * item.price1}
				
				</div>
				</div>
				</div>
				`;
			});
				productContainer.innerHTML += `
				<div class="basketTotalContainer">
					<h2 class="basketTotalTitle">
						Subtotal:
					</h2>
					<h10 class="basketTotal">
						PHP ${cartCost}
					</h10>		
		`;
	}
}


onLoadCartNumbers();
displayCart();