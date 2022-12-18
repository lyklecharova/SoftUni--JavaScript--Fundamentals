function extractEmails(input) {
    let pattern = /(?<!\S)[A-Za-z]+([-._]*[A-Za-z]+)*@[A-Za-z]+([-._]*[A-Za-z]+)*\.[A-Za-z]+/gm;
    let rezult = input.matchAll(pattern);
    for (let match of rezult) {
        console.log(match[0]);
    }
}

extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')