function memoryGame(input) {
    let sequenceOfElements = input.shift().split(" ");
    let command = input.shift().split(" ");
    let currentCommand = command[0];
    let count = 1;

    while (currentCommand !== "end") {
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);

        if (index1 === index2 || index1 < 0 || index2 < 0 || index1 >= sequenceOfElements.length || index2 >= sequenceOfElements.length) {
            let newEl = `-${count}a`;
            console.log("Invalid input! Adding additional elements to the board");
            sequenceOfElements.splice(sequenceOfElements.length / 2, 0, newEl, newEl);
        } else {
            if (sequenceOfElements[index1] === sequenceOfElements[index2]) {
                console.log(`Congrats! You have found matching elements - ${sequenceOfElements[index1]}!`);
                if (index1 > index2) {
                    let temp = index1;
                    index1 = index2;
                    index2 = temp;
                }
                sequenceOfElements.splice(index1, 1);
                sequenceOfElements.splice(index2 - 1, 1);

            } else {
                console.log("Try again!");
            }
        }
        if (sequenceOfElements.length === 0) {
            console.log(`You have won in ${count} turns!`);
            return;
        }
        count++;
        command = input.shift().split(' ');
        currentCommand = command[0];

    }

    console.log(`Sorry you lose :(\n${sequenceOfElements.join(' ')}`);
}
