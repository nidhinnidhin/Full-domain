function reverseStr(str){
    if(str === ''){
        return '';
    }
    return reverseStr(str.substr(1)) + str.charAt(0)
}
console.log(reverseStr('hello'))
