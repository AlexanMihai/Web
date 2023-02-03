const students = [
    {
        name: 'John',
        yearOfBirth: 1990
    },
    {
        name: 'Joe',
        yearOfBirth: 2007
    },
    {
        name: 'Alex',
        yearOfBirth: 1987
    }
]

const currentYear = 2022

const studentsOver18 = students.filter(student => (currentYear - student.yearOfBirth) >= 18);

// const adults = //use array map to get a list of students over 18
// console.log(adults)