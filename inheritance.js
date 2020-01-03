

function Animal(name,energy) {
    this.name=name;
    this.energy=energy;

}

Animal.prototype.eat=function (amount) {
    this.energy+=amount
};

function Dog(name,energy,breed) {
 Animal.call(this,name,energy);
 this.breed=breed;
}



let cat=new Animal('cat',100);


Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;
cat.eat(12);
let dog=new Dog('Charlie',112,'wolf');
// console.log(cat);
// console.log(dog);
// dog.eat(444);
// console.log(dog);
console.log(dog.constructor);

