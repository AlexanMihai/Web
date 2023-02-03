const demoData = [1,2,3,4]

const customMap = (data, transformation) => {
    const newData = []
    for (const oldData of data) {
        newData.push(transformation(oldData))
    }
    return newData
}

console.log(customMap(demoData, (e) => (e*5)))