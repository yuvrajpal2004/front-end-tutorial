function greeting(name){
    console.log(`hellow ${name}`);
}

function age(age){
    console.log(`your age is: ${age}`);
}

function address(address){
    console.log(`your address is : ${address}`);
}


function exampleOfCallback(process){
let inputName=prompt(`enter a name : `);
process(inputName);
};

exampleOfCallback(greeting);
exampleOfCallback(age);
exampleOfCallback(address);