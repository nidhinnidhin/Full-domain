function arrayReverse(arr, index = 0){
    if(index === arr.length){
        return []
    }
    return arrayReverse(arr, index+1).concat(arr[index])
}

console.log(arrayReverse([1,2,23,423,4,2342,34,234,234]))