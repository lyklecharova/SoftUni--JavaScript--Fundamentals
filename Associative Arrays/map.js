let phoneBookMap = new Map();

//! add multiple items in map during initialization
// let map = new Map([
//     ['ivo', '656464']
// ]);



phoneBookMap.set('pesho', '46464474874654');
phoneBookMap.set('gosho', '+9797497');
phoneBookMap.set('mariyka', '78787878765');

console.log(phoneBookMap.get('pesho'));

console.log(phoneBookMap.size);

if (phoneBookMap.has('gosho')) {
    console.log('Gosho is in the house!');
}

// phoneBookMap.delete('gosho');


//! iterate keys in map
for (const key of phoneBookMap.keys()) {
    console.log(key);
}

//! iterate values in map
for (const value of phoneBookMap.values()) {
    console.log(value);
}

//! iterate entries in map
for (const [name, phone] of phoneBookMap.entries()) {
    console.log(`${name} -> ${phone}`);
}

//! iterate map (same as above)
for (const kvp of phoneBookMap) {
    console.log(kvp);
}

//! convert map to object
let pb = Object.fromEntries(phoneBookMap.entries());

//! iterate with foreach method
phoneBookMap.forEach((value, key) => {
    console.log(`${key} -> ${{ value }}`);
});

