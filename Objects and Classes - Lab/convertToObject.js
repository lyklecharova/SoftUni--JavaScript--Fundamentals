function convertToObject(input) {
    let person = JSON.parse(input);
    for (let key in person) {
        console.log(`${key}: ${person[key]}`)
    }
}
