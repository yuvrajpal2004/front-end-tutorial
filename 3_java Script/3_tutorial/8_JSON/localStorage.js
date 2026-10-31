console.log("Using local Storage");
localStorage.setItem('name','ambuj kumar');
let name=localStorage.getItem('name');
console.log(name)
let product=localStorage.getItem('product');
console.log(product)
console.log(typeof product)
let productInfo=JSON.parse(product);
console.log(productInfo);