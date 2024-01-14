function searchArray(arr1, arr2) {
    arr1.sort();
    console.log("sorted ist array", arr1);
    arr2.sort();
    console.log("Sorted second array", arr2);

    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
let num1 = [9, 3, 4, 7, 1];
let num2 = [1, 7, 9, 3, 4];
console.log(searchArray(num1, num2));
