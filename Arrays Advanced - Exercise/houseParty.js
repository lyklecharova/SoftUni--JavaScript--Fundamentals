function houseParty(arr) {
    let list = [];
    let guestName = ''

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(" ");
        let name = line[0];
        let command = line[2];
        if (command !== 'not') {
            if (list.includes(name) === true) {
                console.log(`${name} is already in the list!`);
                continue;
            }
            list.push(name);
        } else {
            if (list.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            list = list.filter(x => x != name);
        }
    }
    console.log(list.join('\n'));
}