function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;

    while (a <= num) {
        if (a === num) return true;
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false;
}

const numberToCheck = 21;

if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
