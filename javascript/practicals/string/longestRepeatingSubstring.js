let str = 'sadfsadfrtytesdsdffrtyte';

let repeatedSubsting = [];
let longestSubstringCount = 0;
let substring;
let sub;
for(let i = 0; i < str.length; i++){
    for(let j = i+1; j < str.length; j++){
        sub = str.substring(i, j+1);
        if(str.indexOf(sub) !== str.lastIndexOf(sub)){
            repeatedSubsting.push(sub)
        }
    }
}

for(let i = 0; i < repeatedSubsting.length; i++){
    for(let j = i+1; j < repeatedSubsting.length; j++){
        if(repeatedSubsting[i] === repeatedSubsting[j]){
            if(repeatedSubsting[i].length > longestSubstringCount){
                longestSubstringCount = repeatedSubsting[i].length;
                substring = repeatedSubsting[i]
            }
        }
    }
}

console.log(substring);