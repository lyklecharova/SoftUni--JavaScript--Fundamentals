function rounding(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    const result = number.toFixed(precision);
    console.log(parseFloat(result));
}
rounding(10.5, 3)