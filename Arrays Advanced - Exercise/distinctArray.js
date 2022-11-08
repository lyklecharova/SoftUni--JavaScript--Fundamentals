function distinctArray(arrOfNumbers) {
    //console.log([...new Set(arrOfNumbers)].join(' '))
    let repeatingElements = [...new Set(arrOfNumbers)];
    console.log(repeatingElements.join(' '));
}
