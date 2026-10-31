let div=document.getElementById('div');
let button1=document.getElementById('button1');
let button2=document.getElementById('button2');
let button3=document.getElementById('button3');

let clicked=function(){
    console.log(this.id);
    this.style.color='white'
    this.style.backgroundColor='red'
}

div.addEventListener('click',clicked);
button1.addEventListener('click',clicked);
button2.addEventListener('click',clicked);
button3.addEventListener('click',clicked);