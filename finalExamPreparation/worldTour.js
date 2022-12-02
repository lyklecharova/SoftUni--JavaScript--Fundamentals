function worldToWorld(input) {
    let text = input.shift();
    //console.log(text);
    let command = input.shift().split(':');
    //  let len = Number(text.length);

    while (command[0] !== 'Travel') {
        let index = Number(command[1]);
        if (command[0] === 'Add Stop') {
            text = text.substring(0, index) + command[2] + text.substring(index, Number(text.length));
            console.log(text);
        }
        if (command[0] === 'Remove Stop') {
            let starIndex = Number(command[1]);
            let endIndex = Number(command[2]);

            if (starIndex > 0 && endIndex <= (Number(text.length) + 1)) {
                text = text.substring(0, starIndex) + text.substring(endIndex + 1, Number(text.length));
                console.log(text);
            }
        }

        if (command[0] === 'Switch') {
            let oldString = command[1];
            let newString = command[2];
            let reg = RegExp(oldString, 'g');
            text = text.replace(reg, newString);
            console.log(text);
        }
        command = input.shift().split(':');
    }
    console.log(`Ready for world tour! Planned stops: ${text}`);
}
worldToWorld((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]))

// Hawai::RomeCyprys-Greece
// Hawai::Rome-Greece
// Bulgaria::Rome-Greece
// Ready for world tour! Planned stops: Bulgaria::Rome-Greece