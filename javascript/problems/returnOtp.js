// This function is for generate 5 digit otp for each call;

// function generateOtp(){
//     return Math.floor(10000 + Math.random() * 90000)
// }

// console.log(generateOtp())

// We can make it more flexible based on argument the digit otp should return;

function returnOtp(dig){
    let otp = '';
    for(let i = 0; i < dig; i++){
        otp += Math.floor(Math.random() * 10)
    }
    return Number(otp)
}

console.log(returnOtp(5))