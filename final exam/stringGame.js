function stringGame(input) {
    let text = input.shift();
    //console.log(text);
    //Th1s 1s my str1ing!//
    let command = input.shift().split(' ');
     //console.log(command);
    // Change 1 i

    while (command[0]!== 'Done') {
        if (command[0]=== 'Change') {
            let char = command[1];
            let repl = command[2];
            let reg = RegExp(char, 'g');
            //let reg = /z/g
            text = text.replace(reg, repl);
            console.log(text);
            //console.log(reg);
        }
        if(command[0] === 'Includes'){
            let textSubstring = command[1];
           if(text.includes(textSubstring)== true){
            console.log('True');
           }else{
            console.log('False');
           }
        }

        if(command[0] === 'End'){
            let endSubsting = command[1];
            if(endSubsting.endsWith(text)){
                console.log('F');
            }else{
                console.log('False');
            }
        }

        if(command[0] === 'Uppercase'){
            text = text.toUpperCase();
            console.log(text);
            //TH1S 1S MY STR1ING!
        }

        if(command[0] === 'FindIndex'){
            let char = command[1];
            // if(text.indexOf(char)){
            //     console.log(c);
            // }
            console.log(text.indexOf(char))
        }

        if(command[0] === 'Cut'){
            let startIndex = Number(command[1]);
            let countet = Number(command[2]);
            //text = text.substring(0, startIndex) + text.substring(count);
            console.log(text.substring(startIndex, countet + startIndex));
        }
        command = input.shift().split(' ');
        
    }
}
stringGame(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]);