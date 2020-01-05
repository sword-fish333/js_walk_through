function Elf(name, weapon) {
    this.name=name;
    this.weapon=weapon;
}

const dan=new Elf('dan','faith');
console.log(dan.weapon);

const Elf1=new Function('name','weapon',`this.name=name;
this.weapon=weapon;
`);

//regular functions are dynamically scoped vs lexically scoped like array functions.Lexically scoped means it counts where it was defined
//and that is why you can not use arrow functions in the example bellow .
Elf.prototype.attack=function() {
    return 'Attack with '+this.weapon;
}

Elf.prototype.build=function () {
    const self=this;
    function building(){
        return self.name+' builds a house!';
    }

    // return building.bind(this);
    return building();
}
const sara=new Elf1('dan','breath fire');
console.log(dan.build());