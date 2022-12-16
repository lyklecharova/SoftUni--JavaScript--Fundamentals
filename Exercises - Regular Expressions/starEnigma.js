function startEnigma(input) {
    let numberOfMessages = Number(input.shift())
    //console.log(numberOfMessages);
    //2
    let patternLatter = /[star]/gmi;
    let decriptedString = [];
    let k;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let attackedCounter = 0;
    let destroyedCounter = 0;
    for (let i = 0; i < numberOfMessages; i++) {
        let encryptedMessage = input.shift();
        //console.log(encryptedMessage);
        //STCDoghudd4=63333$D$0A53333
        //EHfsytsnhf?8555&I&2C9555SR
        let count = (encryptedMessage.match(patternLatter) || []).length;
        // console.log(count);
        // 3
        // 5
        k = []
        decriptedString = []
        for (let i = 0; i < encryptedMessage.length; i++) {
            let asciiCode = encryptedMessage.charCodeAt(i);
            let decripted = asciiCode - count;
            let text = String.fromCharCode(decripted);
            decriptedString.push(text);
        }
        decriptedString = decriptedString.join('')
        // PQ@Alderaa1:30000!A!->20000
        // PQ@Alderaa1:30000!A!->20000@Cantonica:3000!D!->4000NM
        let decriptedPattern = /@(?<planetName>[A-Za-z]+)[^@\-:>!]{0,}:(?<population>\d+)[^@\-:>!]{0,}!(?<attacType>[AD])![^@\-:>!]{0,}->(?<soldierCount>\d+)/g;
        k = decriptedPattern.exec(decriptedString);
        if (k !== null) {
            if (k[3] === 'A') {
                attackedPlanets.push(k[1]);
                attackedCounter++;
            }
            if (k[3] === 'D') {
                destroyedPlanets.push(k[1]);
                destroyedCounter++;
            }
        }
    }
    console.log(`Attacked planets: ${attackedCounter}`);
    if (attackedCounter > 0) {
        let ap = attackedPlanets.sort();
        for (let i = 0; i < ap.length; i++) {
            console.log(`-> ${ap[i]}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedCounter}`);
    if (destroyedCounter > 0) {
        let dp = destroyedPlanets.sort();
        for (let i = 0; i < destroyedPlanets.length; i++) {
            console.log(`-> ${dp[i]}`);
        }
    }
}
startEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])
// Attacked planets: 1
// -> Alderaa
// Destroyed planets: 1
// -> Cantonica

// startEnigma(['3',
// "tt(''DGsvywgerx>6444444444%H%1B9444",
// 'GQhrr|A977777(H(TTTT',
// 'EHfsytsnhf?8555&I&2C9555SR'])
// Attacked planets: 0
// Destroyed planets: 2
// -> Cantonica
// -> Coruscant