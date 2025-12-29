function* printTem(){
    for(let i = 1; i <= 10; i++ ){
        yield i
    }
}

for(let elem of printTem()){
    console.log(elem)
}
