function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

let arr = [10, 20, 30, 40, 50];

console.log(binarySearch(arr, 30)); 
console.log(binarySearch(arr, 60));