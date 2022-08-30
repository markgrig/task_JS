const getSumOfSequence = function( number ) {
    const array = []
    for (let index = 1; index <= number; index++) {
        array.push(index)
    }
    const sumFirstAndLastNumber = array.shift() + array.pop()
    return sumFirstAndLastNumber
}

console.log(getSumOfSequence(5));