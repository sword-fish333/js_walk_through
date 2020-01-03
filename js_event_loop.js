function achieveNirvana(){
    console.log('You are enlighten');
}

function c(){
    console.log('c start func');

    setTimeout(()=>{
        achieveNirvana();
    },3000);
    console.log('c end func');

}


function b() {
    c();
    console.log('b func');
}

function a() {
    b();
    console.log('a func');

}

// a();

//////////////EX2////////////////////////
function main(){
    console.log('A');
    setTimeout(
        function exec(){ console.log('B'); }
        , 0);
    runWhileLoopForNSeconds(3);
    console.log('C');
}
main();
function runWhileLoopForNSeconds(sec){
    let start = Date.now(), now = start;
    while (now - start < (sec*1000)) {
        now = Date.now();
    }
}
// Output
// A
// C
// B