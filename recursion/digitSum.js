function digitSum(n) {
    if (n === 0) return 0;
    return (n % 10) + digitSum(Math.floor(n / 10));
}

console.log(digitSum(1087560));