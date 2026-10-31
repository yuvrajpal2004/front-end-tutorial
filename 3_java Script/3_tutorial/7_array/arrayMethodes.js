let arr=[1,26,3,8,4.8,90,9];
let a={};
  console.log(`befor any operation:`,arr);

console.log(Array.isArray(arr))
console.log(Array.isArray(a));
arr.pop();
 console.log(`after pop : `,arr);

arr.push(3);
console.log(`after push operation : `,arr);

arr.shift();
 console.log(`after shift operation : `,arr);

arr.unshift(0);
 console.log(`after unshift operation :`,arr);

 arr.splice(3,5);
  console.log(`after unshift operation :`,arr);

