 const User={
    name:'Dan',
     active:true,
     cart:[],
     purchases:[]
 }

 let amazonHistory=[];

//pipe would mean changing the order of the functions. It would be from left to right
 const compose =(f,g)=>(...args)=>f(g(...args));
function purchaseItems(...fns){
    return fns.reduce(compose);
}

function addItemToCart(user,item){
    amazonHistory.push(user);
    const updatedCart=user.cart.concat(item);
    return Object.assign({},user,{cart:updatedCart});
}

function applyTaxToItems(user){
    amazonHistory.push(user.cart);

    const {cart}=user;
    const taxRate=1.3;
    const updatedCart=cart.map(item=>{
        return {
            name:item.name,
            price :item.price*taxRate
        }
    })
    return Object.assign({},user,{cart:updatedCart})
}

function buyItems(user){
    amazonHistory.push(user.cart);

    return Object.assign({},user,{purchases:user.cart});
}


 function emptyCart(user){
     return Object.assign({},user,{cart:[]});
 }
 const data=purchaseItems(
     emptyCart,
     buyItems,
     applyTaxToItems,
     addItemToCart
 )(User,{name:'Laptop',price:2000});
console.log(data);
console.log('amazonHistory',amazonHistory);


 //simplistic approach
 // function purchaseItem(user,item){
 //    return Object.assign({},user,{purchases:item})
 // }
 //
 // const user2=purchaseItem(User,{name:'Laptop', price:224});