function fibonacciSeries(a, b, n) {
    for (let i = 0; i < n; i++) {
        const c = a + b;
        console.log(`The values of a, b, and c are ${a}, ${b}, and ${c}`);
        a = b;
        b = c;
    }
}

fibonacciSeries(1, 1, 45);
