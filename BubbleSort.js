function BubbleSort(arr, n) {
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let Arr = [20, 14, 56, 90, 1, 3, 0];
let n = Arr.length;
console.log(BubbleSort(Arr, n));
