//immediately invoked function expression is a design pattern for creating a more modularized code

// (function(){
// console.log(1);
// })();

var script1=(function(){
    function a(){
        return 'iife'
    }

    return {
        a
    }
})();

console.log(script1.a());