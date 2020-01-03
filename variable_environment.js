function one(){
    var isValid=false;
    console.log(isValid)
}

function two() {
    var isValid=true;
    one();
    console.log(isValid)

}

var isValid=false;

two();