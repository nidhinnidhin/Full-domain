// 1. Push array values to a new object property

// let arr = [1,2,3,4,5];

// let obj = {
//     array : []
// }

// for(let vals of arr){
//     obj.array.push(vals)
// }

// console.log(obj)

// 2. Convert array to object with index keys

// let arr = ['red', 'green', 'blue'];

// let obj = {};

// for(let i = 0; i < arr.length; i++){
//     obj[i] = arr[i]
// }

// console.log(obj)

// 3. With generator function print even numbers with 2 seconds delay;


// function* printEven(){
//     for(let i = 1; i <= 10; i++){
//         if(i % 2 == 0){
//             yield i
//         }
//     }
// }

// let pr = printEven()

// const intervalId = setInterval(() => {
//     const next = pr.next();
//     if(!next.done){
//         console.log(next.value)
//     }
//     else{
//         clearInterval(intervalId)
//     }
// }, 2000)
 

