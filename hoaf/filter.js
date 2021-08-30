const items=[1,2,3,4,5,5];
var arr=[];
function call(ele){
    for(let i=0;i<ele.length;i++){
      if(ele[i]%2===0){
        arr.push(ele[i]);
    }
}
console.log(arr);
}
function find(elements,cb){
      cb(elements);
}
find(items,call);