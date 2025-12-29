const double = x => x * 2;
const square = x => x * x;

const composed = x => square(double(x)); // square of double

console.log(composed(3)); // double(3) = 6, square(6) = 36

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// Example
const add1 = x => x + 1;
const times2 = x => x * 2;

const addThenDouble = compose(times2, add1);
console.log(addThenDouble(3)); // (3 + 1) * 2 = 8

