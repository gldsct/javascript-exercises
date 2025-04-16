const fibonacci = function(num) {
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    if (num > 0) {
        for (let i = 2; i < num; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib[num-1];
    }
    else if (num == 0) return 0;
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
