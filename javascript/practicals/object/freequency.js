const datas = [
  { tags: ['js', 'react'] },
  { tags: ['js', 'node'] },
  { tags: ['css', 'react'] },
  { tags: ['js', 'css', 'node'] }
];

let freeq = {}

for(let data of datas){
    for(let langs of data.tags){
        freeq[langs] = (freeq[langs] || 0) + 1
    }
}

console.log(freeq)