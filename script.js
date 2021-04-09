var multiplicator = function (a, b, printText) {
    console.log(printText, a * b);
};
multiplicator(1, 4, 'Multiplied a string and 4, the result is:');
var calculator = function (a, b, op) {
    if (op == 'add')
        return a + b;
    else if (op == 'multiply')
        return a * b;
    else if (op == 'divide') {
        if (b === 0)
            return 'can\'t divide by 0!';
        return a / b;
    }
};
