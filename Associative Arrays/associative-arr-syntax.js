let propertyName = 'stamat stamatov';

let phoneBook = {
    ivaylo: '08445476241841',
    'peter ivanov': '08445476241863',
    'stamat stamatov': '084454762418647',
    [propertyName]: '646545448777', // dynamic propery name
};


console.log(phoneBook.ivaylo);
console.log(phoneBook['peter ivanov']);
console.log(phoneBook[propertyName]);