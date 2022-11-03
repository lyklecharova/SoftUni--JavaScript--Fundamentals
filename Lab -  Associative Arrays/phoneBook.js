function phoneBook(input) {
    let phoneInfo = {};
    for (let i in input) {
        let [personName, phoneNumber] = input[i].split(' ');
        // let result = input[i].split(' ');
        // let personName = result[0];
        // let phoneNumber = result[1];
        phoneInfo[personName] = phoneNumber;
    }
    for (let name in phoneInfo) {
        console.log(`${name} -> ${phoneInfo[name]}`)
    }
}
