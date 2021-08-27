const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function values(obj){
    for(value in obj){
        console.log(obj[value]);
    }
}
values(testObject);