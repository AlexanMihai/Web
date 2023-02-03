const travelers = [
    {
        name: 'John',
        hasVisa: false
    },
    {
        name: 'Joe',
        hasVisa: true
    },
    {
        name: 'Alex',
        hasVisa: true
    }
]


// const filteredTravelers =  use array filter method to get a list of travelers that have a visa
const travelersWithVisa = travelers.filter(traveler => traveler.hasVisa === true);

console.log(travelers)
// console.log(filteredTravelers)