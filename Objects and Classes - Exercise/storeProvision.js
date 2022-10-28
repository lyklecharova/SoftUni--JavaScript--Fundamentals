function storeProvision(currentStock, products) {
    // The first array represents the current stock of the local store
    // The second array will contain products that the store has ordered for delivery
    let storeObj = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let quantityOfProduct = currentStock[i];
        storeObj[quantityOfProduct] = Number(currentStock[i + 1]);
    }

    for (let i = 0; i < products.length; i += 2) {
        let quantityOfProduct = products[i];
        if (!storeObj.hasOwnProperty(quantityOfProduct)) {
            storeObj[quantityOfProduct] = 0;
        }
        storeObj[quantityOfProduct] += Number(products[i + 1]);
    }

    for (let key in storeObj) {
        console.log(`${key} -> ${storeObj[key]}`);
    }
}

