function meetings(input) {
    let meetingsAssoc = {};
    for (let line of input) {
        let [weekday, name] = line.split(" ");
        if (meetingsAssoc.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetingsAssoc[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let name in meetingsAssoc) {
        console.log(`${name} -> ${meetingsAssoc[name]}`);
    }
}
