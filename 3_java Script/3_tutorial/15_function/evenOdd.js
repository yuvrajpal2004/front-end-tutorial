// even odd function
function evenOdd(n){
    let result;
    if(n%2===0){
       result=`the number ${n} is even`
    }else{
       result=`the number ${n} is odd`
    }
 document.querySelector("#heading").innerHTML=`${result}`
   
}

let x=prompt('enter the numbet');
evenOdd(x);