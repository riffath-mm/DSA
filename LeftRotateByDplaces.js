function LeftRotateByDplaces(arr, n, d) {
    reverse(arr, 0, d - 1);
    reverse(arr, d, n);
    reverse(arr, 0, n);
    return arr;
}
function reverse(arr, start, end) {
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length - 1;
let d = 3;
console.log(LeftRotateByDplaces(arr, n, d));
