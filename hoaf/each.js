const items = [1, 2, 3, 4, 5, 5];
function call(elem){
     console.log(elem);
}
function each(elements,cb){
       cb(elements);  
}
each(items,call);