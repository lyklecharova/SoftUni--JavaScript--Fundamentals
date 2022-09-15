function nextDay(year, month, day) {
    let next = new Date(year, month -= 1, day += 1);

    let nextYear = next.getFullYear();
    let nextMonth = next.getMonth();
    let nextDate = next.getDate();

    console.log(`${nextYear}-${nextMonth + 1}-${nextDate}`);
}

