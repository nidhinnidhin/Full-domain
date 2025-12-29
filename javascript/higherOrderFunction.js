// Returning function as result;

// function multiply(num){
//     return function(x){
//         return num * x;
//     }
// }

// const double = multiply(2);
// const trible = multiply(3);

// console.log(double(5));
// console.log(trible(5));


// Passing function as argument:

function hey(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

function callback(){
    console.log('Welcome')
}

hey('Nidhin', callback)