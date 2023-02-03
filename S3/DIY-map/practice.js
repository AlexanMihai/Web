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
    }
]

// const customReduce = 

// const totalGroupMoney = use customReduce to calculate how much money the group has
// console.log(totalGroupMoney)  

function customReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (const item of array) {
        accumulator = callback(accumulator, item);
    }
    return accumulator;
}

const totalMoney = customReduce(students, (acc, student) => acc + student.money, 0);  
console.log(totalMoney)