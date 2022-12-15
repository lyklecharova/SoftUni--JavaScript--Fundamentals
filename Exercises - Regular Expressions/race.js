function race(input) {
    let listOfParticipants = input.shift().split(', ');
    // console.log(listOfParticipants);
    // [ 'George', 'Peter', 'Bill', 'Tom' ]
    let paternName = /[A-Za-z]+/gm;
    let paternDistance = /[\d]/gm;
    let raceObj = {};
    let command = input.shift();
    //console.log(command);
    //George
    let distanceSum = 0;
    while (command !== 'end of race') {
        let name = command.match(paternName).join('');
        //console.log(name);
        //George
        // Ray
        // Bill
        // George
        // Peter
        // Tom
        let distance = command.match(paternDistance);
        //console.log(distance);
        // [
        //     '4', '5', '5',
        //     '6', '6', '6',
        //     '8'
        //   ]
        //   [ '1', '3', '4', '4', '5', '6' ]
        //   [ '5', '1', '2', '3' ]
        //   [ '5', '4', '6' ]
        //   [ '7', '5', '3', '4', '6' ]
        //   [ '5', '5', '3', '6' ]



        distanceSum = 0;
        for (let i = 0; i < distance.length; i++) {
            distanceSum += Number(distance[i]);
        }
        if (listOfParticipants.includes(name)) {
            if (raceObj.hasOwnProperty(name)) {
                raceObj[name].distanceSum += distanceSum;
            } else {
                raceObj[name] = distanceSum;
            }
        }
        command = input.shift();
    }
    let sorted = Object.keys(raceObj);
    sorted.sort((a, b) => raceObj[b] - raceObj[a]);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);



}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)

// 1st place: George
// 2nd place: Peter
// 3rd place: Tom

// race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
//     'Mi*&^%$ch123o!#$%#nne787) ',
//     '%$$B(*&&)i89ll)*&) ',
//     'R**(on%^&ald992) ',
//     'T(*^^%immy77) ',
//     'Ma10**$#g0g0g0i0e',
//     'end of race'])
//1st place: Michonne
// 2nd place: Ronald
// 3rd place: Bill
