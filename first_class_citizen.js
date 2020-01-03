//functions are first class citizen in JS
var stuff=function(){
    console.log( 'stuff');
}

function a(fn) {
    fn()
}

var func=function(){console.log(1)}
a(func);

function c(){
    return function c() {
        console.log(123);
    }
}

c()();