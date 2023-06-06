function secondSmallestNo(arr) {
    if (arr.length < 2) {
        return null
    }
    let first = Infinity;
    let second = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            second = first
            first = arr[i]
        }
        else if (arr[i] < second && arr[i] !== first) {
            second = arr[i]
        }
    }
    return second
}

const a = [2,3, 4, 5, 6, 7, 8]
console.log(secondSmallestNo(a))