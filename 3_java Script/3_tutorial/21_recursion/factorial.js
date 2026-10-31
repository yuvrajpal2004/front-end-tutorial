function factorial(n){
    // base case for o or 1
    if(n===1 || n===0) return 1;

    // recursive case 
    let fact=n*factorial(n-1);
    return fact;
}
console.log(factorial(6));