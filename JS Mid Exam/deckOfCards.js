function deckOfCards(input) {
    let listOfCards = input[0].split(", ");
    let numberOfLines = Number(input[1]);
    for (let i = 2; i < (numberOfLines + 2); i++) {
        let commandN = input[i].split(", ");

        if (commandN[0] === "Add") {
            if (listOfCards.includes(commandN[1])) {
                console.log("Card is already in the deck");
            } else {
                listOfCards.push(commandN[1]);
                console.log("Card successfully added");
            }
        }
        if (commandN[0] === "Remove") {
            if (listOfCards.includes(commandN[1])) {
                let removedCard = listOfCards.indexOf(commandN[1]);
                listOfCards.splice(removedCard, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
            }
        }
        if (commandN[0] === "Remove At") {
            if (commandN[1] < 0 || commandN[1] > listOfCards.length) {
                console.log("Index out of range");
            } else {
                let removeAtCard = commandN[1];
                listOfCards.splice(removeAtCard, 1);
                console.log("Card successfully removed");
            }
        }
        if (commandN[0] === "Insert") {
            if (commandN[1] < 0 || commandN[1] > listOfCards.length) {
                console.log("Index out of range");
            } else {
                if (listOfCards.includes(commandN[2])) {
                    console.log("Card is already added");
                } else {
                    listOfCards.splice(commandN[1], 0, commandN[2]);
                    console.log("Card successfully added");
                }
            }
        }

    }
    console.log(listOfCards.join(", "))
}
