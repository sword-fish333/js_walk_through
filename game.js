//encapsulation
// const elf={
//     name:'Orwell',
//     weapon:'Bow',
//     attack(){
//         return 'Attack with '+this.weapon;
//     }
// }

//factory functions
const elfFunctions={
    attack(){
        return 'Attack with '+this.weapon
    }
}
const createElf=(name,weapon)=>{
    const newElf=Object.create(elfFunctions);
    newElf.name=name;
    newElf.weapon=weapon;
    return newElf;
}

// console.log(elf.attack());

const dan=createElf('Dan','knife');
//it is very hard to attach like this
//better is to use Object.create()

//dan.attack=elfFunctions.attack;
console.log(dan.attack());


