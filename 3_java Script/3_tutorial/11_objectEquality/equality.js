console.log("object equality");
let obj1={a:1,b:2};
let obj2={a:1,b:2}
let obj3=obj1;
console.log(obj1==obj2);// false
console.log(obj1==obj3);// true
console.log(obj1===obj2);// false
console.log(obj1===obj3);// true
 

 ///// object equality using JSON ///
 console.log(" object equality using JSON");
 function jsonEqual(obj1,obj2){
    return JSON.stringify(obj1)=== JSON.stringify(obj2);
 }
 console.log(jsonEqual(obj1,obj2));