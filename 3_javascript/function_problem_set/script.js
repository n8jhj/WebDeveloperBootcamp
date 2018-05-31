function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    result = 1;
    for (var i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

function kebabToSnake(inpStr) {
    return inpStr.replace(/-/g, "_");
}
