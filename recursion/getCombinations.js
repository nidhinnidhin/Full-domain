function getCombinations(arr){
    let result = [];

    function helper(start, combo){
        result.push(combo);

        for(let i = start; i < arr.length; i++){
            helper(i+1, [...combo, arr[i]])
        }
    }
    helper(0, []);
    return result;
}

console.log(getCombinations([1,2,3]))