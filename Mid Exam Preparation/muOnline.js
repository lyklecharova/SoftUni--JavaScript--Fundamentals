function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let inputArray = input.split('|');
    let room = 0; // counter
    //let command = '';
    for (let el of inputArray) {
        room++;
        let commandInfo = el.split(' '); // name of whole array
        let command = commandInfo[0];
        let number = Number(commandInfo[1]);
        //let [command,number]=el.split(' ');
        switch (command) {
            case 'potion':
                health += number;

                if (health > 100) {
                    console.log(`You healed for ${100 - (health - number)} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${number} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                bitcoins += number;
                console.log(`You found ${number} bitcoins.`);
                break;
            default:
                health -= number;
                if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`)
                    console.log(`Best room: ${room}`)
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                }
                break;
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
