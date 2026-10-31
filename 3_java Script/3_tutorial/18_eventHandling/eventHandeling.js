console.log("event handlin");

let clicked=()=>{
    alert('button clicked :')
}
let clickedshow=()=>{
   console.log('kya haal hai bhai : ')
}


let button=document.getElementById('myButton');
// event handler

// button.onclick=clicked;

//event listeners
button.addEventListener('click',clicked);
button.addEventListener('click',clickedshow);

button.removeEventListener('click',clicked);


