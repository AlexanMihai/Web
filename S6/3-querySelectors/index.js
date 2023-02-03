const evenElements = document.querySelectorAll('tbody tr:nth-child(even)')
const oddElements = document.querySelectorAll('tbody tr:nth-child(odd)')

for (const item of evenElements) {
    item.bgColor='#129490'
}

for (const item of oddElements) {
    item.bgColor='##70B77E'
}