let b=5;
let n=3;
let count=1;
function cb(){
    if(count<n){
        console.log(b);
        count++;
    }
}
function limitFunctionCallCount(cb,count){
          cb();
          return cb;
}
var c=limitFunctionCallCount(cb,count);
c();
c();
c();
c();