function heavyDuty(){
    const bigArray=new Array(70000).fill(':)');
    console.log(bigArray);
}

// heavyDuty();


function heavyDuty2() {

    const bigArray=new Array(70000).fill(':)');
    console.log('I am called!');
    return function(index){
        console.log(bigArray[index]);
    }
}

// const duty=heavyDuty2();
// duty(3);
// duty(31);
// duty(300);
// duty(22);

//Encapsulation
const power=()=>{
    let time=0;
    const passTime=()=>time++;
    const launch=()=>console.log('lift off!');
   const  totalTime=()=>time;
    setInterval(passTime,1000);

    return  {
        launch:launch,
        totalTime:totalTime
    }
}

const p=power();
// console.log(p.totalTime());

const arr=[1,2,3,4];

for (let i=0; i<arr.length;i++){
    (function(closerI){
    setTimeout(()=>{
        console.log(arr[closerI])
    },3000);
    })(i);
}