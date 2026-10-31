console.log('event propagation');

let outer=document.getElementById('outer');
let inner=document.getElementById('inner');

outer.addEventListener('click',()=>{
    console.log("outer");
},/*true*/  // for cpturing
);


inner.addEventListener('click',(event)=>{
    console.log("inner");
    /*event.stopPropagation();*/  // bu using this we can stop propagation where we want to stop
});
