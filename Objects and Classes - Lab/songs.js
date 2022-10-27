function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let listSong = [];
    let number = input.shift()
    let typeOfSong = input.pop();
    for (let i = 0; i < number; i++) {
        let [type, name, time] = input[i].split('_');
        let CurrentSong = new Song(type, name, time);
        listSong.push(CurrentSong);
    }
    if (typeOfSong === "all") {
        listSong.forEach((i) => console.log(i.name));
    } else {
        let filtered = listSong.filter((i) => i.type === typeOfSong);
        filtered.forEach((i) => console.log(i.name));
    }

}
