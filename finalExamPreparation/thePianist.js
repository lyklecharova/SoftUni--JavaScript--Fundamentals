function thePianist(input) {
    let numberOfPieces = Number(input.shift());
    //console.log(numberOfPieces); //3

    let pianistObj = {};

    for (let i = 0; i < numberOfPieces; i++) {
        let line = input.shift().split('|');
        //console.log(line);
        // [ 'Fur Elise', 'Beethoven', 'A Minor' ]
        // [ 'Moonlight Sonata', 'Beethoven', 'C# Minor' ]
        // [ 'Clair de Lune', 'Debussy', 'C# Minor' ]
        let pieces = line[0];
        let composer = line[1];
        let key = line[2];


        pianistObj[pieces] = { composer, key };
        //console.log(pianistObj);
    }

    let command = input.shift().split('|');
    //console.log(command);
    //[ 'Add', 'Sonata No.2', 'Chopin', 'B Minor' ]

    while (command[0] !== 'Stop') {
        if (command[0] === 'Add') {
            if (pianistObj.hasOwnProperty(command[1])) {
                console.log(`${command[1]} is already in the collection!`);

            } else {
                composer = command[2];
                key = command[3];
                pianistObj[command[1]] = { composer, key };
                console.log(`${command[1]} by ${command[2]} in ${command[3]} added to the collection!`);
            }
        }

        if (command[0] === 'Remove') {
            if (pianistObj[command[1]]) {
                delete pianistObj[command[1]];
                console.log(`Successfully removed ${command[1]}!`);
            } else {
                console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
            }
        }
        if (command[0] === 'ChangeKey') {
            if (pianistObj.hasOwnProperty(command[1])) {
                console.log(`Changed the key of ${command[1]} to ${command[2]}!`);
                pianistObj[command[1]].key = command[2];

            } else {
                console.log(`Invalid operation! ${command[1]} does not exist in the collection.`);
            }
        }
        command = input.shift().split('|');
    }
    for (let pianist in pianistObj) {
        console.log(`${pianist} -> Composer: ${pianistObj[pianist].composer}, Key: ${pianistObj[pianist].key}`);
    }
}
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])

// Sonata No.2 by Chopin in B Minor added to the collection!
// Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!
// Fur Elise is already in the collection!
// Successfully removed Clair de Lune!
// Changed the key of Moonlight Sonata to C# Major!
// Fur Elise -> Composer: Beethoven, Key: A Minor
// Moonlight Sonata -> Composer: Beethoven, Key: C# Major
// Sonata No.2 -> Composer: Chopin, Key: B Minor
// Hungarian Rhapsody No.2 -> Composer: Liszt, Key: C# Minor


thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])

// Spring by Vivaldi in E Major added to the collection!
// Successfully removed The Marriage of Figaro!
// Invalid operation! Turkish March does not exist in the collection.
// Changed the key of Spring to C Major!
// Nocturne by Chopin in C# Minor added to the collection!
// Eine kleine Nachtmusik -> Composer: Mozart, Key: G Major
// La Campanella -> Composer: Liszt, Key: G# Minor
// Hungarian Dance No.5 -> Composer: Brahms, Key: G Minor
// Spring -> Composer: Vivaldi, Key: C Major
// Nocturne -> Composer: Chopin, Key: C# Minor

