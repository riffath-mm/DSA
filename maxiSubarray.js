function maxiSubarray(arr) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            max = Math.max(sum, max);
        }
    }
    return max;
}
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxiSubarray(arr));
