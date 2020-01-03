var a='you do not know js';
function da(){
    console.log(a);

     var a='hello!'
}


// da();
/////////////


function f1(){
    return function f2() {
        return function f3() {
            console.log('I am very nested!')
        }
    }
}


f1()()();