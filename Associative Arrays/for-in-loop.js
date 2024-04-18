let phoneBook = {
    ivaylo: '11651654',
    pesho: '11651623',
    gosho: '11651634',
    stamat: '11651645',
    maryika: '11651625',
};

for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
}

// for in with arrays
let names = ['pesho', 'gosho', 'stamat'];

for (const index in names) {
    console.log(names[index]);
}