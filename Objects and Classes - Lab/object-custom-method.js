function dogSleep() {
    console.log('zzzz........');
}
let dog = {
    name: 'Balkan',
    bark: function () {
        console.log('Wof wof');
    },
    eat: () => console.log('Yum yum'),
    sleep: dogSleep,
    //! object method notation
    play() {
        console.log('Playing with dog');
    }
};

dog.run = () => {
    console.log('Dog running');
}

console.log(dog.name);
dog.bark();
dog.sleep();
dog.play();
dog.run();