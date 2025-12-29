function reverseStr(str){
    if(str.length === 0){
        return ''
    }
    return str[str.length-1] + reverseStr(str.slice(1))
}

console.log(reverseStr('hello'))