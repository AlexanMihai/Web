const listOfSquareSides = [4,9,20,5]

const listOfSquareAreas = listOfSquareSides.map(e => e ** 2)

const totalArea = listOfSquareAreas.reduce((previous, current) => previous + current, 0)

console.warn(totalArea)