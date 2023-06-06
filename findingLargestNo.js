function findLargestNo(arr){
    if(arr.length == 0){
        return null
    }
    let largest = arr[0]
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}

const a = [ 1,3,4,5,6,8]
console.log(findLargestNo(a)) // 8


