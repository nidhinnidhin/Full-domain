const weekSet = new Set();

let obj1 = {name: 'User'}
let obj2 = {age: 22}

weekSet.add(obj1)
weekSet.add(obj2)

weekSet.delete(obj1)

console.log(weekSet.has(obj2))

weekSet.clear()


