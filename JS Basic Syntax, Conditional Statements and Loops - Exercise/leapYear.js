function leapYear(year) {
    // if(year % 4===0 && year % 100 !==0 || year % 400 === 0){
    //     console.log("yes");
    // }else{
    //     console.log("no");
    // }
    let isLeap = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    let result = isLeap ? 'yes' : 'no';
    console.log(result);

}