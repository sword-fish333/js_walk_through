// function a() {
//     let grandpa='grandpa';
//     return function b() {
//         let father ='father';
//         return function c() {
//             let son='son';
//             console.log( `${grandpa} > ${father} >${son}`);
//         }
//     }
// }
//
// const boo=string1=>string2=>string3=>console.log(`${string1} ${string2} ${string3}`);
//
//
// const one=a();
//
// boo('hi')('tim')('go');

function callMeMaybe(){

setTimeout(  function () {
        console.log(callMe);
    },0);

    var callMe='I am calling you!';
}

callMeMaybe();