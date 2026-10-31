console.log("callback  and promises ")

function getDataFromInternet(succesCallback){
    console.log('data fetching frome internat');
setTimeout(()=>{
    console.log("data feched frome internet");
succesCallback('feched data');
},3000);

console.log('data fetch is set ')
}

function setDataToDB(succesCallback){
    console.log(`interact with Db to save fetched data`);
setTimeout(()=>{
    console.log(`fetched data is saved to DB`);
succesCallback('responce');
},5000);

 console.log(`saving fetched data to the DB`);
}

function user(){
 console.log("responsing to the user")
setTimeout(()=>{
    console.log(`user responce is successfull`);

},5000);


}

getDataFromInternet((data)=>{
 console.log(`saving ${data} to the DB`);
 setDataToDB((id)=>{
    console.log(`${id}  to the user`);
    user();
 })
});