const obj={
    name:'Dan',
    sing(){
        return 'lalalal '+this.name
    },
    singAgain(){
       return this.sing()+ ' !!!';
    }
};

// console.log(obj.singAgain());

function capability(){

    console.log(this.ability+' !');
}
   ability='Sleep';


const obj1={
    ability:' focus',
    capability
}


const obj2={
    ability:' grit',
    capability
}

// capability();

function hello(){
    console.log('hello!')
};

// hello.call();

const wizard={
    name:'Merlin',
    health:100,
    heal(num1,num2){
        return this.health+=num1+num2;
    }
}

const archer= {
    name: 'Robin',
    health: 30,
}

wizard.health=70;

console.log(wizard.heal.call(archer,10,30));
console.log(wizard.heal.apply(archer,[10,30,40]));
healArcher=wizard.heal.bind(archer,31,21)

console.log(healArcher())