const items=[1,2,3,4,5,5];
let k=0;
function call(ele,j){
       k=k+ele[j];
}
function reduce(elements ,cb ,startingValue){
     cb(elements,startingValue);
}
for(let i=0;i<items.length;i++){
    reduce(items,call,i);
}
console.log(k);