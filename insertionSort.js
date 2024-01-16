function insertionSort(arr, n) {
    for (let i = 0; i <= n - 1; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}
let Arr = [9, 8, 15, 14, 6, 5];
let n = Arr.length;
console.log(insertionSort(Arr, n));
