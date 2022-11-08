function arrayManipulation(arrayNumber) {
    let arr = arrayNumber.shift().split(' ').map(Number);
    for (let i = 0; i < arrayNumber.length; i++) {
        let [array, firstNum, secondNum] = arrayNumber[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (array) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }
    function add(el) {
        arr.push(el);
    }
    function remove(num) {
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index) {
        arr.splice(index, 1);
    }
    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(' '));
}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])