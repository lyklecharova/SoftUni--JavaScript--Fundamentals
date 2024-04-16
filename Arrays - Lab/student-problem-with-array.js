//! Create a list of students
let students = ['Pesho', 'Gosho', 'Stamat'];
// console.log(students[0]); 
students[1] = 'George';
// console.log(students[1]); 
// console.log(students);

//! Get the length of the students
console.log(students.length);

//! Get the last element of the students
console.log(students[students.length - 1]);

//! Add elemet at the end of the array
students[students.length - 1] = 'Stefan'; //! not clean code
// console.log(students);
// console.log(students.length); 

//! Add at the end using push() method
students.push('Gabi');
// console.log(students);

//! Select element on invalid position
console.log(students[100]); // undefined

//!  Set element on non existing position
students[23] = 'Yavor';
console.log(students); // empty slots

//! Chek if there is an element inside the array
console.log(students.includes('Pesho')); // return true or false

//! Use toString method on array
console.log(students.toString());

//! Join elements inside array into string
console.log(students.join('|'));