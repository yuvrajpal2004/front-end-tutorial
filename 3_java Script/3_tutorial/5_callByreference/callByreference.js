// console.log("call by value");
// let x=23;
// let y=x;
// console.log(`x=${x} y=${y}`);
// x=30;
// console.log(`x=${x} y=${y}`);
// console.log("call by reerences");
// let a={
//     valueofX:5,
// };
// let b=a;
// console.log(`a=${a.valueofX} b=${b.valueofX}`);
// a.valueofX=10;
// console.log(`a=${a.valueofX} b=${b.valueofX}`);

// //function to swap two numbers using  Call by reference
// function inswap(obj){
//     let temp=obj.a;
//     obj.a=obj.b;
//     obj.b=temp;
//     console.log(`inswapping == a=${obj.a} b=${obj.b}`)
// }

// function main(){
//     let obj={
//         a:2,b:4,
//     };
//     console.log(`befour swaping-- a=${obj.a} b=${obj.b}`);
//     inswap(obj);
//     //after swaping
//     console.log(`after swapping-- a=${obj.a} b=${obj.b}`)
// }

// main();

function swap(p,q){
     console.log(`before swapping :
    valueof p=${p.value} value of  q=${q.value}`);
    let temp=p.value;
    p.value=q.value;
    q.value=temp;
     console.log(`after swapping :
    valueof p=${p.value} value of  q=${q.value}`);
}

let obj1={value:2}
let obj2={value:4}
console.log(`before swapping :
    valueof obj1=${obj1.value} value of  obj2=${obj2.value}`);
   swap(obj1,obj2);
    console.log(`after swapping :
    valueof obj1=${obj1.value} value of  obj2=${obj2.value}`);
