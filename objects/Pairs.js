 const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function pairs(obj){
    for(value in obj){
        console.log(value+", "+obj[value]);
    }
}
pairs(testObject);