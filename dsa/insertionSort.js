function insertionsort(arr){
    for(let i = 0 ; i< arr.length ; i++){
        let insertion = arr[i]
        let j = i - 1;

while(j >= 0 && arr[j] > insertion){
        arr[j + 1] = arr[j]
        j = j - 1
    }
    arr[j + 1] = insertion
    }
    return arr;
}

console.log(insertionsort([23,3,32,23,3,342,45,6,567,5,345,23]))
