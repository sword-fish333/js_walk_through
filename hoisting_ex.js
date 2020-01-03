var favoriteFood='beans';

var originalFoodLike=function() {
    console.log('Original favorite food: ' + favoriteFood);


    var favoriteFood = 'apples';

    console.log('New favorite food: ' + favoriteFood);
}
originalFoodLike();

// function declaration ->defined at parse time !!!!
function india(){
    console.log('warm');
}

//function expression->defined at runtime !!!!

var canada= ()=>{
    console.log('cold');
}

//function invocation/call/execution
canada();
india();


function couple(person1 ,person2){
    console.log(arguments);
    //important !!! arguments
    console.log(Array.from(arguments))
    // return `${person1} is with ${person2}`
}

function couple2(...args){
    console.log(arguments);
    //important !!! arguments
    console.log(Array.from(arguments))
     return `${args[0]} is with ${args[1]}`
}
couple2('Dan','Mara');