function divide(a,b){
    if(b===0){
       
        throw  new Error("input number is 0 ")//throw error by manualy
    }
return a/b;
}
console.log(divide(3,6));
console.log(divide(6,3));
try{console.log(divide(6,0));// try error
}catch(error){// cstch error
  console.log(error)
    console.log(error.message)
}

