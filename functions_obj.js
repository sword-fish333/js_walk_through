const obj={
    two:function(){
        return 2;
    }
}
function one(){
    return 1;
}
console.log(one.call());

// const test=new Function('return 4');
//
// console.log(test());
function test(){
    console.log(1)
}

test.test2='21212';

console.log(test.test2);