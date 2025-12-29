function addValues(n){
    if(n == 0) return 0;

    return n + addValues(n-1)
}

console.log(addValues(5))