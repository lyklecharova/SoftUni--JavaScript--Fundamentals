// declare associative array
let phoneBook = {
    ivaylo: '11651654',
    pesho: '11651623',
    gosho: '11651634',
    stamat: '11651645',
    maryika: '11651625',
};

//! convert associative array to normal array
let phoneBookEntries = Object.entries(phoneBook);

//! sort the array
phoneBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));
// phoneBookEntries.sort(([keyA], [valueB]) => keyA. localeCompare(valueB[0]));

//! optional: convert back to associative array
let sortedPhonedBook = Object.fromEntries(phoneBookEntries);

