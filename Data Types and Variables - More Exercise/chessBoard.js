function chessBoard(number) {
    console.log('<div class="chessboard">');

    let y = 0; // counter

    for (let i = 0; i < number; i++) {
        console.log('  <div>');
        y += 1;

        for (let j = y; j < number + y; j++) {

            if (j % 2 === 0) {
                console.log('    <span class="white"></span>');
            } else {
                console.log('    <span class="black"></span>');
            }

        }
        console.log('  </div>');
    }
    console.log('</div>');
}
