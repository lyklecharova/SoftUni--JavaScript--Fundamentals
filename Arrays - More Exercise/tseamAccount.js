function tseamAccount(array) {
    let sequenceOfGameNames = array.shift().split(' ');
    let index = 0;
    let command = array[index];
    index++;

    while (command !== "Play!") {
        command = command.split(" ");
        let gameName = command[1];

        switch (command) {
            case "Install":
                if (!sequenceOfGameNames.includes(gameName)) {
                    sequenceOfGameNames.push(gameName);
                    break;
                }
            case "Uninstall":
                for (let i = 0; i < sequenceOfGameNames.length; i++) {
                    if (sequenceOfGameNames[i] === gameName) {
                        sequenceOfGameNames.splice(i, 1);
                        break;
                    }
                }
            case "Update":
                for (let i = 0; i < sequenceOfGameNames.length; i++) {
                    if (sequenceOfGameNames[i] === gameName) {
                        let game = sequenceOfGame.splice(i, 1);
                        sequenceOfGameNames.push(game);
                        break;
                    }
                }
            case "Expansion":
                gameName = gameName.split("-");
                let expansion = gameName[1];
                for (let i = 0; i < sequenceOfGame.length; i++) {
                    if (sequenceOfGame[i] === gameName[0]) {
                        let removeGame = sequenceOfGame[i];
                        removeGame += `:${expansion}`;
                        sequenceOfGame.splice(i + 1, 0, removeGame);
                        break;


                    }
                }
                break;
        }

        command = array[index];
        index++;


    }
    console.log(sequenceOfGameNames.join(' '))
}



