const students = [
    {
        name: 'John',
        money: 100
    },
    {
        name: 'Joe',
        money: 50
    },
    {
        name: 'Alex',
        money: 250
    },
    {
        name: 'Joe',
        money: 300
    }
]

// const totalGroupMoney = use array reduce to calculate how much money the group has, excluding anyone named Joe
// console.log(totalGroupMoney)

const totalMoney = students.reduce((acc, student) => {
    if (student.name !== 'Joe') {
        return acc + student.money;
    }
    return acc;
}, 0);  

console.log(totalMoney)