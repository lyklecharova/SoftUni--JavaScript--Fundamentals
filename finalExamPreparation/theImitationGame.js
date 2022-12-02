function theImitationGame(input) {
    let encryptedMessage = input.shift();
    //console.log(encryptedMessage); //zzHe
    let command = input.shift().split('|');
    let len = encryptedMessage.lenght;

    while (command[0] !== 'Decode') {
        if (command[0] === 'Move') {
            let number = command[1]
            encryptedMessage = encryptedMessage.substring(number) + encryptedMessage.substring(0,number)
                //console.log(str);
        }
        if(command[0] === 'Insert'){
            let index = command[1];
            let value = command[2];
            encryptedMessage = encryptedMessage.substring(0,index) + value + encryptedMessage.substring(index, len);
            //console.log(encryptedMessage);
        }
        if(command[0] === 'ChangeAll'){
            let text = command[1];
            let repl = command[2];
            let reg = RegExp(text, 'g');
            //let reg = /z/g
            encryptedMessage = encryptedMessage.replace(reg, repl);
            //console.log(encryptedMessage);
            //console.log(reg);
        }
        command = input.shift().split('|');
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ])