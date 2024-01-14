function missingElementAP(arr, n) {
    let start = 0;
    let end = n - 1;
    let diff = arr[1] - arr[0];
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid < n - 1 && arr[mid + 1] - arr[mid] !== diff) {
            return arr[mid] + diff;
        }
        if (mid > 0 && arr[mid] - arr[mid - 1] !== diff) {
            return arr[mid - 1] + diff;
        }
        if (arr[mid] === arr[0] + mid * diff) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return "No missing element found";
}
let arr = [2, 4, 4, 8, 10, 12];
console.log(missingElementAP(arr, 5));
