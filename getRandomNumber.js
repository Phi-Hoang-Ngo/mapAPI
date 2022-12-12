

function getRandomNumber(){
const promise = Promise.resolve(Math.random());
function resolve(){ setTimeout(() => {
  promise.then(val => console.log(val));
}, 500)};
function reject(){console.log("error")};
let promise1 = new Promise(resolve, reject); 


;

  return promise1;
}

async function printNumber( ){
  getRandomNumber();
 x =  await getRandomNumber();
return (x * 1000);
}
console.log(printNumber());




