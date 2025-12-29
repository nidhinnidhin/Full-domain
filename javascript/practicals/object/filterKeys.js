// 1 Filter keys with string values only

let obj  =  { a: 10, b: 'hello', c: true, d: 'world' };

for(let strs in obj){
    if(typeof obj[strs] === 'string'){
        console.log(strs)
    }
}