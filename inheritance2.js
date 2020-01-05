class Character{
    constructor(name,weapon){
        this.name=name;
        this.weapon=weapon;
    }

    attack(){
        return this.name+' has attacked with '+this.weapon;
    }
}

class Elf extends Character{
    constructor(name,weapon,type){
        super(name,weapon);
        this.type=type;
    }
}

class Ogre extends  Character{
    constructor(name,weapon,color){
        super(name,weapon);
        this.color=color;
    }
    makeFort(){
        return 'made fort!'
    }
}
const dolby=new Elf('Dolby','knife','house');
const Shrek=new Ogre('Shrek','punch','green');
console.log(Shrek.makeFort());
