// 1. With generator function print even numbers with 2 seconds delay;

// function* printEven(){
//     for(let i = 1; i <= 10; i++){
//         if(i % 2 == 0){
//             yield i
//         }
//     }
// }

// let pr = printEven()

// for(let num of pr){
//     setInterval(() => {
//         console.log(num)
//     }, 2000)
// }

// function* greet(){
//     const name = yield 'Whats ur name';
//     yield `My name is ${name}`
// }

// let val = greet();
// console.log(val.next().value)
// console.log(val.next('Nidhin').value)

function* printVals(...nums) {
  for (let i = nums.length-1; i >= 0; i--) {
    if (nums[i] % 2 == 0) {
      yield nums[i];
      i = i - 2;
    }
  }
}

let vals = printVals(1,2,3,4,5,6,7,8,9);
for (let ele of vals) {
  console.log(ele);
}
