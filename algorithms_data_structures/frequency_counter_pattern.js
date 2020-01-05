//naive approach
const same=(arr1,arr2)=>{
    let match=true;
        arr1.forEach(el=>{
            const  appearance1=findFrequancy(el,arr1,false);
          const  appearance2=findFrequancy(el,arr2,true);
        if(appearance1!==appearance2){
            match=false;
        }
        })

    return match;
}

const  findFrequancy=(nr,arr,double)=>{
    let nr_to_find=nr;

    if(double){
        nr_to_find=nr*nr;
    }
    let appearances=0;

    arr.forEach(el=>{
        if(el===nr_to_find){
            appearances++
        }
    })
    return appearances;
}

// console.log(same([1,2,2,3],[1,4,4,9]));


function sameImroved(arr1,arr2) {
    if(arr1.length!==arr2.length){
        return false;
    }

    let frequancyCounter1={};
    let frequancyCounter2={};
    for(let v of arr1){
        frequancyCounter1[v]=(frequancyCounter1[v] || 0)+1;
    }

    for(let v of arr2){
        frequancyCounter2[v]=(frequancyCounter2[v] || 0)+1;
    }

    for (let key in frequancyCounter1){
        if(!(key**2 in frequancyCounter2)){
            return false;
        }
        if(frequancyCounter2[key**2]!==frequancyCounter1[key]){
            return false;
        }
    }
    return true;
}

// console.log(sameImroved([1,2,2,6],[1,4,4,36]));


function isAnagram(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }

    const lookup={};
    for(let i=0;i<str1.length;i++){
        let letter=str1[i];
        //if letter exists increment otherwise set to 1
        lookup[letter]? lookup[letter]+=1 : lookup[letter]=1;
    }

    for (let i=0; i<str2.length;i++){
        let letter=str2[i];
        //if letter dose not exist or is 0 return false
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter]-=1
        }
    }
    return true;
}

console.log(isAnagram('iceman','cinemr'));
if(1){
    console.log(1);

}
