let obj={name:"ambuj",
    age:"21",
    class:"12th"
}

//object to JSON string
let objJSON=JSON.stringify(obj);
console.log(objJSON);

console.log(typeof objJSON)

// JSON STRING TO object

let newObj=JSON.parse(objJSON);
console.log(newObj);
console.log(typeof newObj)