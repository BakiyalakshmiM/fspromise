let obj={};
function cb(value){
     
        if(obj.hasOwnProperty(value)){
            console.log(obj[value]);    
            }
        else{
            obj[value]=value+value;
            console.log(obj[value]);
            }
    }
function cacheFunction(cb){
          cb();
          return cb;
}
var c=cacheFunction(cb);
c(1);
c(2);
c(2);
c(4);