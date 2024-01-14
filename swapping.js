function swapping(x, y) {
    let temp = x;
    x = y;
    y = temp;

    return { x, y };
}
let a = 5;
let b = 10;
console.log(swapping(a, b));
