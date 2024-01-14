function minMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { max, min };
}
let Arr = [6, 2, 5, 1, 9, 4];
console.log(minMax(Arr));
