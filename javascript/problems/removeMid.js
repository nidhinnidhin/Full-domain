// Without any inbuild method:-

// let arr = [1,2,3,4,5,6,7];
// let midIndex = Math.floor(arr.length / 2)
// let mid = arr[midIndex]


// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === mid){
//         for(let k = i; k < arr.length-1; k++){
//             arr[k] = arr[k+1];
//         }
//         arr.length = arr.length - 1;
//     }
//     console.log(arr[i])
// }

// Using splice: -

let arr = [1,2,3,4,5,6,7];
let midIndex = Math.floor(arr.length / 2)
let mid = arr[midIndex]


for(let i = 0; i < arr.length; i++){
    if(arr[i] === mid){
        arr.splice(i,1)
    }
    console.log(arr[i])
}