class Dog {
    constructor(dogName, dogBreed) {
        this.name = dogName;
        this.breed = dogBreed;
    }
    bark() {
        console.log(`${this.name}: wof wof`);
    }
}

let firstDog = new Dog('Sharo', 'UlichnaPrevyzhodna');
let secondDog = new Dog('Balkan', 'BulgarianSheppard');
console.log(firstDog);
console.log(secondDog);

firstDog.bark();
secondDog.bark();