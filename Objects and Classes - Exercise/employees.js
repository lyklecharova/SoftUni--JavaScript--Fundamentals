function employees(input) {
    let listOfEmployees = {};
    for (let employeeName of input) {
        let personalNumber = employeeName.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`)
    }

}
