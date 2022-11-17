function cardGame(input) {
    let cardGameObj = {};
    for (let person of input) {
        person = person.split(": ");
        let name = person[0];
        let card = person[1].split(", ");
        cardGameObj[name] = card;

    }
    for (let person in cardGameObj) {
        let card = cardGameObj[person];
        for (let element of card) {
            let result = 0; // counter
            if (element.length === 2) {
                let power = Number(element[0]);
                let type = element[1];
                switch (type) {
                    case "S":
                        result += power * 4;
                        break;
                    case "H":
                        result += power * 3;
                        break;
                    case "D":
                        result += power * 2;
                        break;
                    case "C":
                        result += power * 1;
                        break;
                }
            } else {

            }
            cardGameObj[person] = result;
        }
    }
}