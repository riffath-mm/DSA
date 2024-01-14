function binarySearch(arr, size, search) {
    let low = 0;
    let high = size - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (search == arr[mid]) {
            return mid;
        } else if (search < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

let num1 = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];
console.log(binarySearch(num1, 15, 42));
console.log(binarySearch(num1, 15, 142));
