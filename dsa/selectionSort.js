function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
            if(smallest !== i){
                let temp = arr[smallest];
                arr[smallest] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort([12,23,23,3,3,2,2,34,34,23,423,423,34,42]))