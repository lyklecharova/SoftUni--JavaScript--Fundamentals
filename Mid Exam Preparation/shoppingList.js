function shoppingList(listOfgroceries) {
    let groceries = listOfgroceries.shift().split("!")

    let index = 0;
    let command = listOfgroceries[index];
    index++

    while (command !== "Go Shopping!") {
        command = command.split(" ");

        let item = command[1];
        let newItem = command[2];
        command = command[0]
        switch (command) {
            case 'Urgent':
                if (!groceries.includes(item)) {
                    groceries.unshift(item);
                    break;
                }
                break
            case 'Unnecessary':
                if (!groceries.includes(item)) {
                    break;
                }
                for (let i = 0; i < groceries.length; i++) {
                    if (!groceries.includes(item)) {
                        break;
                    }
                    if (groceries[i] === item) {
                        groceries.splice(i, 1);
                        break;
                    }
                }
                break;
            case "Correct":
                if (!groceries.includes(item)) {
                    break;
                }
                for (let i = 0; i < groceries.length; i++) {
                    if (groceries[i] === item) {
                        //groceries.splice(i, 1);
                        groceries.splice(i, 1, newItem);
                        break;
                    }
                }
                break;
            case "Rearrange":

                if (!groceries.includes(item)) {
                    break;
                }
                for (let i = 0; i < groceries.length; i++) {
                    if (groceries[i] === item) {
                        let removegroceries = groceries.splice(i, 1);
                        groceries.push(removegroceries);
                        break;
                    }
                }
                break;
        }
        command = listOfgroceries[index];
        index++;
    }



    console.log(`${groceries.join(', ')}`)
}