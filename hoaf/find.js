const items=[1,2,3,4,5,5];
var arr=[];
function call(ele){
    for(let i=0;i<ele.length;i++){
      if(ele[i]===3){
        arr.push(ele[i]);
      }
    }
    if(arr.length!==0){
        console.log("true");
    }
    else{
        console.log("undefined");
    }
}
function find(elements,cb){
      cb(elements);
}
find(items,call);
console.log(arr);