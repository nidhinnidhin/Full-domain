// function callback(){
//     console.log('Callback');
// }

// function f1(callback){
//     callback()
// }

// function f2(f1){
//     f1()
// }

// function f3(f2){
//     f2()
// }

// f3(()=>{
//     f2(()=>{
//         f1(()=>{
//             callback()
//         })
//     })
// })

// function callback(){
//     console.log('Callback');
// }

// function f1(){
//     console.log(1)
//     return Promise.resolve()
// }

// function f2(){
//     console.log(2)
//     return Promise.resolve()
// }

// function f3(){
//     console.log(3)
//     return Promise.resolve()
// }

// f1()
//     .then(f2)
//     .then(f3)
//     .then(callback)








// Bank function
// function processPayment(amount ,to, genBill){
//     // return false
//     console.log("paid amount ", amount, ' to ', to)
//     genBill()
// }

function processPayment(amount ,to){
    // return false
    console.log("paid amount ", amount, ' to ', to)
    return Promise.resolve()
}


//my shop function

function generateBill(){
    console.log("anu bought for 1000")
}

async function placeOrder(amount){

    //check details code

    //call bank to process payment
    
    let paymentStatus =  await processPayment(1000, "ANu")

    paymentStatus.then(()=>{
            generateBill()
        })
        .catch(()=>{
            console.log("payment failed")
        })
}





//user

placeOrder(1000)