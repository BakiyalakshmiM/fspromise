const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function mapObject(obj,cb){
    for(let key in obj){
         obj[key]=obj[key]+"...";
    }
}
let index=3;
mapObject(testObject,index);
console.log(testObject);