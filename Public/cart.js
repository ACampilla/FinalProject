let carts = document.querySelectorAll(".add-me"); 
let products = 
[
{
	name: '[2CD SET)TXT (TOMORROWXTOGETHER)',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000063/GD00062657.default.1.png',
	price1: 15.66,
	inCart: 0
},
{
	name: '2PM-WIRELESS EARHPHONE CASE AIRPOD PRO',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066013.default.1.png',
	price1: 14.16,
	inCart: 0
},
{
	name: '1025 DOKDO TONER 3TYPES',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065893.default.1.jpg',
	price1: 10,
	inCart: 0
},
{
	name: 'ALL TAKE MOOD CHEEK PALLET',
	tag: 'https://cafe24img.poxo.com/beautyboxkorea/web/product/big/202108/53be9d223450d5e68894ded6c9c79cb0.jpg',
	price1: 20.36 ,
	inCart: 0
},
{
	name: 'AMIGO Nacho Grab N Go Guacamall 100g',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000061/GD00060942.default.1.jpg',
	price1: 1.86 ,
	inCart: 0
},
{
	name: 'ASUM ALBUM (ASUMICATION)',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000060/GD00059572.default.1.png',
	price1: 15.66 ,
	inCart: 0
},
{
	name: 'Baek Yu rin Album',
	tag: 'https://kpopmart.com/24342-large_default/baek-yerin-album-present.jpg',
	price1: 19.56,
	inCart: 0
},
{
	name: 'Banana Kick Chocolate milk 200ml',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066249.default.1.jpg',
	price1: 0.62,
	inCart: 0
},
{
	name: 'Birch Juice MOISTURIZING PAD',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065728.default.1.jpg',
	price1: 28.32,
	inCart: 0
},
{
	name: 'BLOO-Its not love Im just drunk TRUCKER HAT',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000056/GD00055731.default.1.jpg',
	price1: 26.02,
	inCart: 0
},
{
	name: 'Botti - 1st Album [지금, 보티]',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066728.default.1.png',
	price1: 13.01,
	inCart: 0
},
{
	name: 'Brewing Kombucha',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065044.default.2.jpg',
	price1: 1.42,
	inCart: 0
},
{
	name: 'CICA EMULSION',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066458.default.2.jpg',
	price1: 21.24,
	inCart: 0
},
{
	name: 'Chic Choc Chocolate Cooki Tiramisu 90g',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066392.default.1.jpg',
	price1: 1.6,
	inCart: 0
},
{
	name: 'CICA BLACKHEAD CLEANER',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066315.default.1.jpg',
	price1: 15.93,
	inCart: 0
},
{
	name: 'CICA SMOOTHER',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066575.default.1.jpg',
	price1: 7.97,
	inCart: 0
},
{
	name: 'CIKI Album[busy doing nothing]',
	tag: 'https://kpopmart.com/23807-large_default/ciki-busy-doing-nothing.jpg',
	price1: 11.68,
	inCart: 0
},
{
	name :'CIX-1st Album [0K PROLOGUE: BE OK',
	tag: 'https://cdn.shopify.com/s/files/1/1801/5317/products/WAVEver_1200x1200.jpg?v=1626928219',
	price1: 16.28,
	inCart: 0
},
{
	name: 'CLEANSING FOAM',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065577.default.1.jpg',
	price1: 12.39,
	inCart: 0
},
{
	name: 'DREAM CATCHER-Special Mini Album',
	tag: 'https://kpopmart.com/23799-large_default/dream-catcher-special-mini-album-summer-holiday-ver-g-limited-edition.jpg',
	price1: 34.40,
	inCart: 0
},
{
	name: 'DRIPPIN-2021 DRIPPIN SHINE PACKAGE',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000050/GD00049474.default.1.jpg',
	price1: 63.71,
	inCart: 0
},
{
	name: 'ESSENCE SKIN FOUNDATION PACK',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066377.default.1.jpg',
	price1: 21.06,
	inCart: 0
},
{
	name: 'Ettore Kim - LP Album [시의 어느 멋진 날에]',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066794.default.1.png',
	price1: 13.01,
	inCart: 0
},
{
	name: 'From all to human-LP Album',					
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000063/GD00062659.default.1.png',
	price1: 38.93,
	inCart: 0
},
{
	name: 'Hi-L Mini Album Vol.1',
	tag: 'https://kpopmart.com/24007-large_default/hi-l-mini-album-vol-1-go-high.jpg',
	price1: 13.01,
	inCart: 0
},
{
	name: 'HYUNA&DAWN-EP [1+1=1]',
	tag: 'https://i.redd.it/0oedarebxuk71.jpg',
	price1: 15.66,
	inCart: 0
},
{
	name: 'KIM JAE HWAN-ONLINE FAN CONCERT DOCKING Photo Card  kit',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000054/GD00053001.default.1.jpg',
	price1: 8.85,
	inCart: 0
},
{
	name: 'KIN JAE HWAN[POCKET WATCH]',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000062/GD00061086.default.1.png',
	price1: 15.93,
	inCart: 0
},
{
	name: 'KOLAVO ALBUM Vol.1',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000063/GD00062649.default.1.png',
	price1: 13.01,
	inCart: 0
},
{
	name: 'LOOPY-OKIDSXLOPPY T-SHIRT',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000056/GD00055730.default.1.jpg',
	price1: 46.26,
	inCart: 0
},
{
	name: 'LUMINOUS - Mini Album Vol.1',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065911.default.1.png',
	price1: 14.43,
	inCart: 0
},
{
	name: 'Micro Correctfit Cushion 2types',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066448.default.1.jpg',
	price1: 24.78,
	inCart: 0
},
{
	name: 'N.FLYING-OFFICIAL LIGHT KEYRING',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000057/GD00056714.default.1.jpg',
	price1: 32.74,
	inCart: 0
},
{
	name: 'OWEN SMILE BAG',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000056/GD00055782.default.1.jpg',
	price1: 22.12,
	inCart: 0
},
{
	name: 'OWEN T-SHIRT BLACK',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000056/GD00055722.default.1.jpg',
	price1: 34.51,
	inCart: 0
},
{
	name: 'P1 HARMONY OFFICIAL LIGHT STICK',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000062/GD00061203.default.1.png',
	price1: 33.63,
	inCart: 0
},
{
	name: 'Pepsi Zero Sugar Lime Flavour 355ml',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065041.default.1.jpg',
	price1: 1.15,
	inCart: 0
},
{
	name: 'PORORO Mini Yakgwa 120g*1IEA',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066559.default.1.jpg',
	price1: 1.66,
	inCart: 0
},
{
	name: 'Pringles Sour cream & onion 53g*1EA',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066699.default.1.jpg',
	price1: 1.15,
	inCart: 0
},
{
	name: 'PROGLOSS MASK',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066455.default.1.jpg',
	price1: 21.24,
	inCart: 0
},
{
	name: 'Solga 1st Album-Roadless Road',
	tag: 'https://i.scdn.co/image/ab67616d0000b2735ae6f1a2fae4c2b780d797d1',
	price1: 15.66,
	inCart: 0
},
{
	name: 'Soybean NOURISHING TONER 300ML',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065736.default.1.jpg',
	price1: 21.24,
	inCart: 0
},
{
	name: 'Ssal lo byul Rice snack Real Shrimp 90g',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066394.default.1.jpg',
	price1: 1.07,
	inCart: 0
},
{
	name: 'Supreme Gold Coffee mix 270g',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066637.default.1.jpg',
	price1: 4.07,
	inCart: 0
},
{
	name: 'Sweet Maple Pancake mix(cup) 160g',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065050.default.1.jpg',
	price1: 3.37,
	inCart: 0
},
{
	name: 'SWS FIRMING ESSENTIAL',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065884.default.2.jpg',
	price1: 150.42,
	inCart: 0
},
{
	name: 'TENSION FLEX MASK',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065580.default.1.jpg',
	price1: 30.37,
	inCart: 0
},
{
	name: 'Teumsae Tteobokki 166g',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000063/GD00062864.default.1.jpg',
	price1: 2.04,
	inCart: 0
},
{
	name: 'THE BOYZ-FABRIC POSTER',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000060/GD00059275.default.1.png',
	price1: 26.55,
	inCart: 0
},
{
	name: 'TRI.BE-TRI.BE BOTTLE',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000056/GD00055185.default.1.jpg',
	price1: 18.01,
	inCart: 0
},
{
	name: 'Pringles Sour cream & onion 53g*1EA',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066699.default.1.jpg',
	price1: 1.77,
	inCart: 0
},
{
	name: 'VICTON : Do Han Se - Digital Album Vol.1 [BLAZE] (KIT)',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000067/GD00066786.default.1.png',
	price1: 16.90,
	inCart: 0
},
{
	name: 'VILAK RICE PUNCH 238ML',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065046.default.1.jpg',
	price1: 0.45,
	inCart: 0
},
{
	name: 'VITA MASK',
	tag: 'https://www.ktown4u.com/goods_files/SH0164/goods_images/000066/GD00065570.default.1.jpg',
	price1: 1.33,
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