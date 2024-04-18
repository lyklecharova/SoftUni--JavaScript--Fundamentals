let phoneBook = {
    ivaylo: '11651654',
    pesho: '11651623',
    gosho: '11651634',
    stamat: '11651645',
    maryika: '11651625',
};

let phoneBookEntries = Object.entries(phoneBook);

for (const kvp of phoneBookEntries) {
    let name = kvp[0];
    let phone = kvp[1];

    console.log(`${name} -> ${phone}`);
}

//! shorter version
for (let kvp of Object.entries(phoneBook)) {
    let [name, phone] = kvp; // array destructuring assignment
    console.log(`${name} -> ${phone}`);
}

//! even shorter version
for (let [name, phone] of Object.entries(phoneBook)) {
    console.log(`${name} -> ${phone}`);
}