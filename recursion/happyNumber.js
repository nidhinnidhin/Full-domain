function happy(num, seen = {}){
    if(num === 1) return true;
    if(seen[num]) return false;

    seen[num] = true;
    let sum = String(num).split('').reduce((acc, d) => acc + d * d, 0)

    return happy(sum, seen)
}

console.log(happy(19)); // true
console.log(happy(2));  // false
