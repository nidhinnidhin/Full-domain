function addValues(n){
    if(n == 0) return 0;

    return n + addValues(n-1)
}

console.log(addValues(5))

// Array values


function addValues(arr){
    if(arr.length === 0){
        return 0;
    }
    return arr[0] += addValues(arr.slice(1))
}

let arr = [1,2,3,4,5,6,7,10]
console.log(addValues(arr))