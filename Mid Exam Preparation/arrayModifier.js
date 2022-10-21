function arrayModifier(input) {
    let initialArrayValues = input.shift().split(" ").map(Number);
    let command = input.shift().split(" ");
    let currentCommand = command[0];


    while (currentCommand !== "end") {
        let index1 = Number(command[1]);
        let index2 = Number(command[2]);

        switch (currentCommand) {
            case "swap":
                let swapEl = initialArrayValues[index1];
                initialArrayValues[index1] = initialArrayValues[index2];
                initialArrayValues[index2] = swapEl;
                break;

            case "multiply":
                initialArrayValues[index1] *= initialArrayValues[index2];
                break;

            case "decrease":
                for (let i = 0; i < initialArrayValues.length; i++) {
                    initialArrayValues[i]--;

                }
                break;
        }
        command = input.shift().split(" ");
        currentCommand = command[0];

    }
    console.log(initialArrayValues.join(", "));
}
