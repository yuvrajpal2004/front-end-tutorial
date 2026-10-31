console.log('this is the resolve of callback nesting usig promises ');

function getDataFromeInternet(){
   let promise=new Promise((resolve,reject)=>{
    console.log('data fetching frome internat');
   resolve('hi ambuj');
   });
   return promise;
};
getDataFromeInternet()
.then((data)=>{
    console.log(`the data is fetched ${data}`);
})