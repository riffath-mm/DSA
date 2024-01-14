function removeDuplicates(arr) {
    let temp = [];
    let j = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            temp[j] = arr[i];
            j++;
        }
    }
    // Add the last element of the original array
    temp[j] = arr[arr.length - 1];
    return temp;
}
let Array = [8, 8, 1, 2, 6, 7, 9];
let Arr = [1, 1, 2, 3, 4, 5, 6, 7];
console.log(removeDuplicates(Array));
console.log(removeDuplicates(Arr));
