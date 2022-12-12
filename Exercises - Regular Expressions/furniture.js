function furniture(input) {
    let pattern = /[>]{2}(?<name>[A-Z]+[a-z]{0,})[<]{2}(?<price>[\d.]+)!(?<quantity>[\d]+)/gm;
    let product = [];
    let totalSum = 0;
    let index = 0;
    let command = input[index];
    while (command !== 'Purchase') {
        pattern.lastIndex = 0; // return last index
        //console.log(command);
        //>>Sofa<<312.23!3
        // >>TV<<300!5
        // >Invalid<<!5
        let productInfo = pattern.exec(command);
        if (productInfo !== null) { // null ==== nothing
            let productName = productInfo.groups.name;
            //console.log(productName);
            //console.log(productInfo);

            //Sofa
            // TV
            product.push(productName);
            let finalPrice = Number(productInfo.groups.price);
            let finalQuantity = Number(productInfo.groups.quantity);
            totalSum += finalPrice * finalQuantity;
        }
        index++;
        command = input[index];
    }
    console.log('Bought furniture:');
    for (let products of product) {
        console.log(products);
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

    // oneoneoneoneone  regex=one lastindex=15
}
furniture(['>>Sofa<<312.23!3masjhdvja',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
//Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69