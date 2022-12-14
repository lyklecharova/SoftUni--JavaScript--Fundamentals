function softUniBar(input) {
    let pattern =
        /[%](?<customer>[A-Z][a-z]+)[%][^|$%.]*?[<](?<product>\w+)[>][^|$%.]*?[|](?<count>[\d]+)[|][^|$%.]*?(?<price>[\d\/.]+)[$]/gm;
    let index = 0;
    let command = input[index];
    // console.log(command);
    // %George%<Croissant>|2|10.3$
    let income = 0;
    let customer;
    let product;
    let count;
    let price;
    while (command !== 'end of shift') {
        pattern.lastIndex = 0;
        //console.log(command);
        // %George%<Croissant>|2|10.3$
        // %Peter%<Gum>|1|1.3$
        // %Maria%<Cola>|1|2.4$

        let matchPattern = pattern.exec(command);
        if (matchPattern !== null) {
            customer = matchPattern.groups.customer;
            count = Number(matchPattern.groups.count);
            // console.log(customer);
            // George
            // Peter
            // Maria
            // console.log(count);
            // 2
            // 1
            // 1
            price = Number(matchPattern.groups.price);
            product = matchPattern.groups.product;
            console.log(`${customer}: ${product} - ${(price * count).toFixed(2)}`);
            income += price * count;
        }
        index++;
        command = input[index];
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
// George: Croissant - 20.60
// Peter: Gum - 1.30
// Maria: Cola - 2.40
// Total income: 24.30