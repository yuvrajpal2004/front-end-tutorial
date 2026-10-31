console.log("learning object");
let product={};
console.log(product);
console.log(typeof product);
// modify the object
product.name='sport';
console.log(product)
console.log('dot notation :',product.name);
console.log('bracket notation :',product['name']);
//deleting the element of object
delete product.name;
console.log(product)