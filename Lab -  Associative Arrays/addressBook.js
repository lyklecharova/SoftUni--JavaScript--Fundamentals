function addressBook(input) {
    let addressInfo = {};

    for (let i in input) {
        let result = input[i].split(':');
        let name = result[0];
        let address = result[1];
        addressInfo[name] = address;;
    }
    let result = Object.entries(addressInfo);
    result.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
    for (let key of result) {
        let name = key[0];
        let addressEntry = key[1];
        console.log(`${name} -> ${addressEntry}`)
    }
}
