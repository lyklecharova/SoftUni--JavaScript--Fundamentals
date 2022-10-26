function addAndRemove(number) {

    let command = [];
    let counter = 0;
    for (let i = 0; i < number.length; i++) {
        counter += 1;

        if (number[i] === 'add') {
            command.push(counter);
        }
        if (number[i] === 'remove') {
            command.pop();
        }

    }
    if (command.length === 0) {
        console.log("Empty")
    } else {
        console.log(command.join(' '));
    }

}
