let carts = document.querySelectorAll(".add-me"); 
let products = 
[
{
	name: '[2CD SET)TXT (TOMORROWXTOGETHER)',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000063/GD00062657.default.1.png',
	price1: 120,
	inCart: 0
},
{
	name: 'Dog Toothpaste',
	tag: 'dogToothpaste1',
	price1: 120,
	inCart: 0
},
{
	name: 'Dog Food (Medium Dogs)',
	tag: 'dogfood1',
	price1: 150,
	inCart: 0
},
{
	name: 'Dog Food (small Dogs)',
	tag: 'dogfood2',
	price1: 150,
	inCart: 0
},
{
	name: 'Dog Bowl (Bone stickers design)',
	tag: 'dogBowl',
	price1: 70,
	inCart: 0
},
{
	name: 'Dog Cage',
	tag: 'dogCage1',
	price1: 500,
	inCart: 0
},
{
	name: 'Dog Cage Topless(light blue)',
	tag: 'dogCage2',
	price1: 520,
	inCart: 0
},
{
	name: 'Dog Collar Spiked',
	tag: 'dogCollar',
	price1: 70,
	inCart: 0
},
{
	name: 'Dog Collar Neck Belt',
	tag: 'dogCollar2',
	price1: 75,
	inCart: 0
},
{
	name: 'Dog Leash Leather Soft Braided',
	tag: 'dogLeash',
	price1: 75,
	inCart: 0
},
{
	name: 'Dog Leash light Blue',
	tag: 'dogLeash2',
	price1: 80,
	inCart: 0
},
{
	name: 'Dog Toys Pack 6pc.',
	tag: 'dogtoys1',
	price1: 60,
	inCart: 0
},
{
	name: 'Dog Toys Soft plushies 6pc.',
	tag: 'dogToys2',
	price1: 65,
	inCart: 0
},
{
	name: 'Cat Shampoo',
	tag: 'catgrooming1',
	price1: 120,
	inCart: 0
},
{
	name: 'Cat Toothpaste',
	tag: 'catToothpaste1',
	price1: 120,
	inCart: 0
},
{
	name: 'Cat Food (medium cats)',
	tag: 'catfood1',
	price1: 150,
	inCart: 0
},
{
	name: 'Cat Food (small cats)',
	tag: 'catfood2',
	price1: 150,
	inCart: 0
},
{
	name :'Cat Bowl',
	tag: 'catBowl1',
	price1: 70,
	inCart: 0
},
{
	name: 'Cat Bowl Double',
	tag: 'catBowl2',
	price1: 120,
	inCart: 0
},
{
	name: 'Cat Cage',
	tag: 'catCage1',
	price1: 500,
	inCart: 0
},
{
	name: 'Cat Cage Portable Carrier',
	tag: 'catCage2',
	price1: 575,
	inCart: 0
},
{
	name: 'Cat Collar(Pink)',
	tag: 'catCollar1',
	price1: 55,
	inCart: 0
},
{
	name: 'Cat Collar(Stripe vest)',
	tag: 'catCollar2',
	price1: 60,
	inCart: 0
},
{
	name: 'Cat Harness & Leash',					/* dito pa-edit, name and tag --yung tag is yung name lang ng image sa folder ng images pero nasa home.html naman--di ko sure yung price,,,,bali in order dapat simula ka sa taas ng mga products sa home.html hanggang sa pinakababa.. */
	tag: 'catLeash1',
	price1: 65,
	inCart: 0
},
{
	name: 'Cat Collar (summer style high blue-green)',
	tag: 'catLeash2',
	price1: 65,
	inCart: 0
},
{
	name: 'Cat Toy Sushi cat w/ Sushi Roll',
	tag: 'catToys2',
	price1: 120,
	inCart: 0
},



]

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