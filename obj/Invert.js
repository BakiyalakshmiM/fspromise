const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function invert(obj){
     var inv={};
     for(var key in obj){
         inv[obj[key]]=key;
     }
     return inv;
}
console.log(invert(testObject));