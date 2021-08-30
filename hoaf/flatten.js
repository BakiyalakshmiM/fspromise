const nestedArray = [1, [2], [[3]], [[[4]]]];
var arr=[];
function flatten(elements){
      for(let i=0;i<elements.length;i++){
          if(Array.isArray(elements[i])){
              arr=flatten(elements[i]);
          }
          else{
              arr.push(elements[i]);
          }
      }
      return arr;
}
console.log(flatten(nestedArray));