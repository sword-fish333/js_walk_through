if(window.Worker){
 var worker= new Worker('worker.js');

 var message={addThis:{num1:1,num2:123}};
 worker.postMessage(message);

 worker.onmessage=function (e) {
     console.dir(e.data.result)
 }
}