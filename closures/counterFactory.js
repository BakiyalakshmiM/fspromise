function counterFactory(b){
         var currentValue=b;
    function increament(increamentValue){
          currentValue+=increamentValue;
          console.log("currentvalue :"+currentValue);
    }
    function decreament(decreamentValue){
        currentValue-=decreamentValue;
        console.log("currentValue :"+currentValue);
    }
    return {increament:increament,decreament:decreament};
}
var a=counterFactory(0);
a.increament(5);
a.decreament(1);