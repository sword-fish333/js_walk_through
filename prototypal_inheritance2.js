
const dragon ={
    name:'Django',
    fire:true,
    damage(){
        return 10
    },
    sing(){
        if(this.fire)    return `I am ${this.name} the breather of fire!`
    }
}

let lizard ={
    name:"FireStarter",
    damage(){
        return 1
    }
}
lizard.__proto__=dragon;
// const singLizard=dragon.sing.bind(lizard);
console.log(lizard.damage());
// console.log(singLizard());