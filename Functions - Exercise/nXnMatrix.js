function nXnMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        let newMatrix = [];
        for (let j = 0; j < n; j++) {
            newMatrix.push(n);
        }
        matrix.push(newMatrix.join(' '));
    }
    console.log(matrix.join('\n'));
}
