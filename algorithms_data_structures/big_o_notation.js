const {performance} = require('perf_hooks');
const reverseString=string=>{
    return string.split('').reverse().join('');
}

console.log(reverseString('THe beast is hear'));

const addUpTo=n=>{
    let i=1;
    let total=0;
    while(i<=n){
        total+=i;
        i++;
    }

    return total;
};
function addUpToAdvanced(n){
    return n*(n+1)/2;
}
let t1=performance.now();
console.log(addUpToAdvanced(1000000000));
let t2=performance.now();

console.log(`Time elapsed: ${((t2-t1)/1000).toFixed(2)} seconds`);
// console.log(addUpToAdvanced(100));

//addUpToAdvanced  has an O(1) because the number of operations is always 3 it does not depend on the input . addUpTo depends

const countUpAndDown=n=>{
    let i=0;
    while (i<=n){
        console.log(i);
        i++
    }
    console.log('We are up');
    i--;
    while(i>=0){
        console.log(i);
        i--
    }
    console.log('Back down again!');

};

// countUpAndDown(100);


function printAllPairs(n) {
    for(let i=0; i<n;i++){
        for(let j=0; j<n;j++){
            console.log(i,j);
        }

    }

}
//the complexity of printAllPairs is O(n^2)
printAllPairs(10);