const getDevisorCount = function( number = 1 ) {
    let count = 0

    if ( Number.isInteger(number) ) {
        for ( i = 1; i <= number ; i += 1) {
            number % i === 0 ? count += 1 : count += 0
        }
    }
    else {
        alert('Переменная должна быть числом')
    }

    return count

}

console.log(getDevisorCount(12));
//console.log(getDevisorCount("бам"));