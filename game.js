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
    return {
        name,
        weapon,
    }
}

// console.log(elf.attack());

const dan=createElf('Dan','knife');
dan.attack=elfFunctions.attack;
console.log(dan.attack());