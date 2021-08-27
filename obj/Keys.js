const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
let arr=[];
function keys(obj){
    for(let key in obj){
         arr.push(key);
    }
}
keys(testObject);
console.log(arr.toString());