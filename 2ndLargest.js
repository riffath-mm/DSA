function secondLargest() {
    let largest = arr[0];
    let secLar = -1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secLar = largest;
            largest = arr[i];
        } else if (arr[i] < largest && arr[i] > secLar) {
            secLar = arr[i];
        }
    }
    return secLar;
}
let arr = [1, 4, 5, 7, 6, 12, 0, 88, 15];
console.log(secondLargest(arr));
