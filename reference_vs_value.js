{
    var a=10;
}

console.log(a);

let obj1={name:'Dan',pass:'123'};
let obj2=obj1;
obj2.pass='12345';
console.log(obj1);

var c=[1,2,3,4,5,6];
var d=[].concat(c);
d.push(1312331132);
console.log(c);

let Obj={a:'a',b:'b',c:{deep:'Try and copy me'}};

//cloning obj
//THIS IS A SHALLOW CLONE
let clone=Object.assign({},Obj);
let clone2={...Obj}
//deep clone->it has performance
let superClone=JSON.parse(JSON.stringify(Obj));
Obj.c.deep='you dont know JS';
console.log(Obj);
console.log(clone);
console.log(clone2);
console.log(superClone);