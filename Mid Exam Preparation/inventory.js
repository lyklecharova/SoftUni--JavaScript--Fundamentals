function inventory(input) {
    let journal = input.shift().split(", "); // receive a journal with some collecting items
    let oldItem = 0;
    let newItem = 0;

    let diffCommand = [];

    for (let i = 0; i = input.length; i++) {
        diffCommand = input.shift().split(" - ");
        let command = diffCommand[0];
        if (command === "Combine Items") {
            let item = diffCommand[1].split(":");
            oldItem = item[0];
            newItem = item[1];
        } else {
            oldItem = diffCommand[1];
            newItem = diffCommand[2];
        }
        switch (command) {
            case "Collect":
                if (!journal.includes(oldItem)) {
                    journal.push(oldItem);
                }
                break;

            case "Drop":
                if (journal.includes(oldItem)) {
                    let toRemove = journal.indexOf(oldItem);
                    journal.splice(toRemove, 1);
                }

                break;
            case "Combine Items":
                if (journal.includes(oldItem)) {
                    let toAdd = journal.indexOf(oldItem);
                    journal.splice(toAdd + 1, 0, newItem);
                }

                break;
            case "Renew":
                if (journal.includes(oldItem)) {
                    let toRenew = journal.indexOf(oldItem);
                    let renew = journal.splice(toRenew, 1);
                    journal.push(renew);
                }

                break;
            case "Craft!":
            default:
                console.log(journal.join(", "));
                break
        }
    }
}
