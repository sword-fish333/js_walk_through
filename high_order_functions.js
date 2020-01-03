




const authenticate=()=>{
    let i=0;
    while(i<1000000){
        i++
    }

    return true;
}

const accessGranted=(name,fn)=>{
    fn()
    console.log('Access granted to '+name);
}




accessGranted('Dan',authenticate);
