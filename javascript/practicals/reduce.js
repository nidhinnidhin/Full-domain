let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

// let res = arr.flat().reduce((acc, val) => acc+val)


let res = arr.reduce((acc, row) => {
    return acc + row.reduce((sum, num) => sum + num, 0)
},0)

console.log(res)