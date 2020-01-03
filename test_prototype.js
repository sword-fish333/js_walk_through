const y=new Date('1900-2-2').getFullYear();
console.log(y);

Date.prototype.lastYear=function () {
    return this.getFullYear()-1;
}

console.log(new Date('2002').lastYear());
Array.prototype.map=function(){
let arr=[];
for(let i=0; i<this.length;i++){
    arr.push(this[i]+':)')
}

return arr;
};

console.log([1,2,34,5,5].map());
console.log(new Date().lastYear());