const number = [ 10 , 4 , 100, -5, 54, 2 ]

let sumOfCubes = 0

for (let index = 0; index < number.length; index++) {
    sumOfCubes = sumOfCubes + number[index]**3 
}

console.log(sumOfCubes);
sumOfCubes = 0

for ( let a of number) {
    sumOfCubes = sumOfCubes + a**3
}

console.log(sumOfCubes);
sumOfCubes = 0

number.forEach(element => {
    sumOfCubes = sumOfCubes + element**3
});

console.log(sumOfCubes);
sumOfCubes = 0

sumOfCubes = number.reduce( (acc, element) => {
    return acc + element**3
})

console.log(sumOfCubes);