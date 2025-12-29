function sum(...vals){
    let sum = vals.reduce((acc, val) => acc+val);
    return sum;
}

console.log(sum(10,20,30,40,50))


const [first,sdf,ss, ...rest] = [10,203,30,40];

console.log(rest)