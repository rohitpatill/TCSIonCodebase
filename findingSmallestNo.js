// find smallest element in array 
function findSmallestNo(arr){
    if(arr.legth ==0){
        return null
    }
    let small = arr[0]
    for(let i = 0 ; i<arr.legth ; i++){
        if(arr[i]<small){
            small = arr[i]
        }
    }
    return small
}

const a = [ 1,3,4,5,6,8]
console.log(findSmallestNo(a))