function cats(input) {
    class Cat {
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }
        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }
    let cat = [];

    for (let i = 0; i < input.length; i++) {
        let typeOfCat = input[i].split(' ');
        // let name = typeOfCat[0];
        // let age = typeOfCat[1];
        let [name, age] = [typeOfCat[0], typeOfCat[1]];
        cat.push(new Cat(name, age));
    }
    for (let catMeow of cat) {
        catMeow.meow();
    }

}
