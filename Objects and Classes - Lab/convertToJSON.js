function convertToJSON(name, lastName, hairColor) {
    let personInfo = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }
    console.log(JSON.stringify(personInfo));
}
