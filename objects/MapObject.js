const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function index(ele){
      for(let key in ele){
           ele[key]=ele[key]+"....";
      }
}
function mapObject(obj,cb){
      cb(obj);
}
mapObject(testObject,index);
console.log(testObject);