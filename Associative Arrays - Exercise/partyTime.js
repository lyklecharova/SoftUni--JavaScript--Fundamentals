function partyTime(input) {
    let vipList = [];
    let regularList = [];

    let command = input.shift();

    while (command !== "PARTY") {
        let isVip = isNaN(command[0]); //NaN - is not a number

        if (isVip) {
            vipList.push(command);
        } else {
            regularList.push(command);
        }
        command = input.shift();
    }
    let allGuest = regularList.concat(vipList);
    for (let guest of input) {
        allGuest.splice(allGuest.indexOf(guest), 1);
    }
    console.log(allGuest.length);
    allGuest.forEach(guest => console.log(guest));
}