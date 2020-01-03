let Animal=function(name,age){
    this.name=name;
    this.age=age;
}

Animal.__proto__.sing=function(){
    return 'lalalala';
}


let Dog=function(name,age,breed){
    Animal.call(this,name,age);
    this.breed=breed;
}
Dog.prototype=Object.create(Animal);
Dog.prototype.constructor=Dog;
let spike=new Dog('Spike',22,'buldog');
//
// console.log(spike);
// console.log(spike.sing());
//
// for (let prop in Dog){
//     if(Dog.hasOwnProperty(prop)){
//         console.log(prop);
//     }
// }

console.log(Animal.isPrototypeOf(Dog));