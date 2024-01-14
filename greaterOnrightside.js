function greaterOnrightside(arr) {
    let max = -1;
    for (let i = arr?.length - 1; i >= 0; i--) {
        let temp = max;
        if (arr[i] > max) {
            temp = arr[i];
        }
        arr[i] = max;
        max = temp;
    }
    return arr;
}
let Array = [16, 17, 4, 3, 5, 2];
console.log(greaterOnrightside(Array));
