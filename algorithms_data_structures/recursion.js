//recursivitate vs iterabilitate

//return random item
const powers=['lift heavy','sprint','resistance','explosive','flexible'];

console.log(powers[Math.floor(Math.random()*powers.length)]);

const countDown=n=>{
    if(n===0){
        console.log('All done!');
        return;
    }

    console.log(n);
    n--
    countDown(n);
}

// countDown(10);

const sumRange=n=>{
    if(n===1)  return 1;
   return n+ sumRange(n-1);
}
const factorial=n=>{
    if(n===1) return 1;
    return n*factorial(n-1)
};
console.log(factorial(4))

function addUpToAdvanced(n){
    return n*(n+1)/2;
}


let obj={
    two(){
        return 2;
    }
}

console.log(obj.two.call());

const f=new Function('num', 'return num');


console.log(f(1212121));