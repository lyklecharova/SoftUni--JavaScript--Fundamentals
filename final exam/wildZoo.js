function wildZoo(input) {
    let zoo = {};
    let line = input.shift();

    while (line !== 'EndDay') {
        let [command, ...rest] = line.split(': ');
        let [animalName, food, area] = rest[0].split('-');
        food = Number(food);
        if (command === 'Add') {
            if (zoo.hasOwnProperty(animalName)) {
                zoo[animalName].food += food;
               // zoo[animalName].area = area;
            } else {
                zoo[animalName] = { food, area };
            }
        }

        if (command === 'Feed') {
            if (zoo.hasOwnProperty(animalName)) {
                zoo[animalName].food -= food;
                if (zoo[animalName].food <= 0) {
                    delete zoo[animalName];
                    console.log(`${animalName} was successfully fed`);
                }
            }

        }

        line = input.shift();

    }
    console.log('Animals:');
    for (let animal in zoo) {
        console.log(`${animal} -> ${zoo[animal].food}g `);
    }
    console.log('Areas with hungry animals:');

    let obla = {};
    for (let animal in zoo) {
        areas = zoo[animal].area;
        if (obla.hasOwnProperty(areas)) {
            obla[areas].cont += 1;

        } else {
            cont = 1;
            obla[areas] = { cont, };
        }


    }
    for (let area in obla) {
        console.log(`${area}: ${obla[areas].cont}`);
    }


}
//wildZoo(["Add: Adam-4500-ByTheCreek", "Add: Maya-7600-WaterfallArea", "Add: Maya-1230-WaterfallArea",
//   "Feed: Jamie-2000", "EndDay"])

wildZoo(["Add: Jamie-600-WaterfallArea", "Add: Maya-6570-WaterfallArea", "Add: Adam-4500-ByTheCreek", "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000", "Feed: Adam-2000", "Feed: Adam-2500", "EndDay"]) 