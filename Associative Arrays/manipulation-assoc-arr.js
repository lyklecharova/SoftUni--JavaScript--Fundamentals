let phoneBook = {
    ivaylo: '11651654',
    pesho: '11651623',
    gosho: '11651634',
    stamat: '11651645',
    maryika: '11651625',
};

//! Chek if there is an entry
if(phoneBook.hasOwnProperty('ivaylo')){
    console.log('Entry found: ' + phoneBook['ivaylo']);
}

if(phoneBook['pesho']){
    console.log('Entry found: ' + phoneBook['pesho']);
}