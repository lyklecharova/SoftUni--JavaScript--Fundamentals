function bonusScoringSystem(input) {
    let numberOfTheStudents = Number(input[0]);
    let numberOfTheLectures = Number(input[1]);
    let theAdditionalBonus = Number(input[2]);
    let attendanceOfEachStudent = Number(input[3]);

    let maxBonus = 0;
    let studentAttendances = 0;

    for (let i = 3; i <= numberOfTheStudents + 3; i++) {

        attendanceOfEachStudent = Number(input[i]);
        let totalBonus = Math.ceil((attendanceOfEachStudent / numberOfTheLectures) * (5 + theAdditionalBonus));
        if (maxBonus < totalBonus) {
            maxBonus = totalBonus;
        }
        if (attendanceOfEachStudent > studentAttendances) {
            studentAttendances = attendanceOfEachStudent;
        }
    }
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);
}
