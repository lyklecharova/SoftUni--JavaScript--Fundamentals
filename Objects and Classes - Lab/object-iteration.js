let info = {
    firstName: 'Pesho',
    lastName: 'Ivanov',
    age: 28,
    eyeColor: 'brown',
    isMale: true,
};

//! iterate values
for (const value of Object.values(info)) {
    console.log(value);
}

//! iterate values
for (const key of Object.keys(info)) {
    console.log(`${key} - ${info[key]}`);
}