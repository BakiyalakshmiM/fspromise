const items=[1,2,3,4,5,5];
var arr=[];
function it(elem){
    for(let i=0;i<elem.length;i++){
        arr.push(elem[i]+5);
    }
}
function map(elements,cb){
     cb(elements);
}
map(items,it);
console.log(arr);