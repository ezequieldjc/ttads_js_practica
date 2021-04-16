/*
    CLOUSURES
        
*/
function makeadder (a){
    return function(b){
        return a+b;
    };
}

var x = makeadder(5);
var y = makeadder(20);
console.log(x(6));
console.log(y(7));