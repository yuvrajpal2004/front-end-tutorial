 let x=prompt("enter 1st number")
 let y=prompt("enter 2nd number")
 larger(x,y);

 function larger(x,y){
    let result;
    if(x>y){
        result=`${x} is larget than ${y}`;
    }else{
          result=`${y} is larget than ${x}`;
    }
    document.querySelector("#heading").innerHTML=`${result};`
 }