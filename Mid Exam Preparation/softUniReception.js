function softUniReception(input) {
    let firstEmploy = Number(input[0]);
    let secondEmploy = Number(input[1]);
    let thirdEmploy = Number(input[2]);
    let studentsCount = Number(input[3]);

    let studentsPerHour = firstEmploy + secondEmploy + thirdEmploy;
    let hours = 0;

    for (let i = 0; studentsCount > 0; i++) {
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }

        studentsCount -= studentsPerHour;
    }

    // while (studentsCount > 0) {
    //     hours++;
    //     if (hours % 4 === 0) {
    //         continue;
    //     }
    //     studentsCount -= studentsPerHour;
    // }
    console.log(`Time needed: ${hours}h.`)
}
