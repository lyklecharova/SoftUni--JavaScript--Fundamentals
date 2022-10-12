function guineaPig(input) {
    let quantityFood = Number(input[0]);
    let quantityHay = Number(input[1]);
    let quantityCover = Number(input[2]);
    let guineaWeight = Number(input[3]);

    for (let i = 1; i < 31; i++) {
        quantityFood -= 0.3;
        if (quantityFood <= 0) {
            console.log('Merry must go to the pet store!');
            break;
        }
        if (i % 2 === 0) {
            quantityHay -= quantityFood * 0.05;
            if (quantityHay <= 0) {
                console.log('Merry must go to the pet store!');
                break;
            }
        }
        if (i % 3 === 0) {
            quantityCover -= guineaWeight / 3;
            if (quantityCover <= 0) {
                console.log('Merry must go to the pet store!');
                break;
            }
        }
    }
    if (quantityFood >= 0 && quantityHay >= 0 && quantityCover >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFood).toFixed(2)}, Hay: ${(quantityHay).toFixed(2)}, Cover: ${(quantityCover).toFixed(2)}.`);

    }
}
