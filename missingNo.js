function missingNo(ar, size, Tsum) {
    console.log(" the sorted array  is", ar.sort());
    size = ar.length;
    console.log("The Size Of aRRay is ====", size);
    let expectedSum = (size * (size + 1)) / 2;
    console.log("The expectedSum Of aRRay is ====", expectedSum);
    for (let i = 0; i < size - 1; i++) {
        Tsum += ar[i];
    }
    console.log("Sum of Given Array", Tsum);
    let missingNo = expectedSum - Tsum;

    console.log("the missing number in an array is", missingNo);
}
let array = [5, 3, 7, 8, 1, 4, 6];
missingNo(array, 7, 0);
