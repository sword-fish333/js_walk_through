var LivingEntity=function(location){
    this.x=location.x;
    this.y=location.y;
    this.z=location.z;

}

LivingEntity.prototype.moveWest=function(){
    this.x-=10;
}

var dog=new LivingEntity({
    x:10,
    y:20,
    z:30
});

dog.moveWest();


console.log(dog);

Object.prototype.a=10;

var v={};

var Dragon=function (location) {
    LivingEntity.call(this,location)

    this.canFly=true;
}

Dragon.prototype=Object.create(LivingEntity.prototype);
Dragon.prototype.constructor=Dragon;
var spark=new Dragon({x:110,y:200,z:300});
spark.moveWest();
console.log(v.a);
console.log(spark);
console.log(Dragon.prototype);
