function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}
let num1 = [5, 0, 9, 4, 7, 3, 6, 10];
console.log(linearSearch(num1, 7)); /* Element found, return its index*/

console.log(linearSearch(num1, 17)); /* Element  not found */
