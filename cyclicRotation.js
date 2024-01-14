function cyclicRotation(arr) {
    let i = arr?.length - 1;
    let j = arr?.length - 2;
    while (i > 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i--;
        j--;
    }
    return arr;
}
let Arr = [1, 2, 3, 4, 5];
console.log(cyclicRotation(Arr));
