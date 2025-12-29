function callback() {
  console.log("Callback");
}

// function sample(callback) {
//   let counter = 1;
//   let intervalId = setInterval(() => {
//     if (counter <= 10) {
//       callback();
//       counter++;
//     } else {
//       clearInterval(intervalId);
//     }
//   }, 2000);
// }

function* gen(callback){
    let counter = 1;
    let intervalId = setInterval(() => {
        if(counter <= 10){
            yield callback;
        }
        else{
            clearInterval(intervalId)
        }8
    }, 2000)
 }


gen(callback)

