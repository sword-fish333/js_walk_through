//syntactic sugar for prototypal inheritance
class Car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }

    showCar(){
        return this.brand+' '+this.model;
    }
}

const vw=new Car('VW','Polo');

console.log(vw.showCar());