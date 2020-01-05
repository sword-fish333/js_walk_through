//naive version
function sumZero(arr){
   for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]+arr[j]===0){
            return [arr[i],arr[j]];
        }
    }
   }
}


// console.log(sumZero([1,2,2,222,1,-222]));


//multiple pointers pattern (only for sorted arrays)

function sumZeroImproved(arr) {
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===0){
            return [arr[left],arr[right]];
        }else if(sum>0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZeroImproved([-22,-21,2,4,5,5,21]));