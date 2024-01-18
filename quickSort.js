function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
    return [...sortedLeft, pivot, ...sortedRight];
}
let Arr = [8, 3, 5, 4, 7, 6, 1, 2];
console.log(quickSort(Arr));
