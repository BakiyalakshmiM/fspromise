const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function defaults({obj=testObject.name,defaultProps='Welcome!!'}={}){
       return obj+","+defaultProps;
}
console.log(defaults(testObject));