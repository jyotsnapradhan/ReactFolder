function generateRandom(n){
    let arr= new Array(n);
       for(let i=0;i<n;i++){
          arr[i]=Math.floor(Math.random()*10);
       }
       console.log(`arr from generateRandom: ${arr}`);
       return arr;
}
function sum(arr) {
console.log(`arr: ${arr}`);
let arr1=arr.reduce((alreadyPrev, nextCurr) => alreadyPrev + nextCurr);
console.log(`printing arr1 from sum: ${arr1}`);
return arr1;

}

export {generateRandom, sum};