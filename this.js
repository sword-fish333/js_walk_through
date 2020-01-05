//implicit binding
const pers={
    name:'dan',
    age:22,
    show(){
        return this.name+' is of age '+this.age;
    }
}


//explicit binding
var car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

const myDetails=car.displayDetails.bind(car);

myDetails();

//arrow functions are lexical scoped NOT dynamically scoped , like the rest of functions .THis means that it matters where it is written.

const pers3={
name:'Valandra',
    age:23,
    hi:function(){
    let inner=()=>{
        console.log('Hi from '+this.name)
    }
    inner();
    }
}


// pers3.hi();


const  bike=function() {
    console.log(this.name);
}

let name='Ninja';
let obj1={name:'Alex',bike:bike};

obj1.bike();