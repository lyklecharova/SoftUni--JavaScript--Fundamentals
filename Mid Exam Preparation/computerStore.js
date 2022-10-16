function computerStore(input) {
    let pricesWithoutTax = 0;
    let taxes = 0;
    let discount = 0;
    let finalPrice = 0;
    let price = 0;

    for (price of input) {
        if (price === "regular" || price === "special") {
            break;
        }
        if (Number(price) > 0) {
            pricesWithoutTax += Number(price);
        } else {
            console.log("Invalid price!");
        }
    }
    if (pricesWithoutTax === 0) {
        console.log("Invalid order!");
    }
    if (price === "special" && pricesWithoutTax > 0) {
        taxes = pricesWithoutTax * 0.2;
        discount = (taxes + pricesWithoutTax) * 0.1;
        finalPrice = taxes + pricesWithoutTax - discount;

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${pricesWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
    if (price === "regular" && pricesWithoutTax > 0) {
        taxes = pricesWithoutTax * 0.2;
        finalPrice = taxes + pricesWithoutTax;

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${pricesWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
}


