const objectsToFilter = [
    {
        name: 'John',
        hasVisa: true,
        yearOfBirth: 1990
    },
    {
        name: 'Joe',
        hasVisa: false,
        yearOfBirth: 2007
    },
    {
        name: 'Alex',
        hasVisa: false,
        yearOfBirth: 1987
    },
    {
        name: 'Alex',
        hasVisa: true,
        yearOfBirth: 1960
    }
]

const filterObject = {
    hasVisa: true,
    name: 'Alex'
}

const filterArray = (array, filter) => {
    return array.filter(element => {
        let meetsFilterCriteria = true
        for (const filterCondition of Object.keys(filter)) {
            if (!element[filterCondition] || element[filterCondition] !== filter[filterCondition]) {
                meetsFilterCriteria = false
                break
            }
        }
        return meetsFilterCriteria
    })
}

console.log(filterArray(objectsToFilter, filterObject))