const getSumOfNumber = function( number, type ) {
    let sumVal = 0
    let valIteration
    
    //число с котрого наичанется сумма 
    type === "even" ? valIteration =  1 : valIteration = 0

    while ( valIteration <= number) {
        sumVal = sumVal +  valIteration
        type === "odd" || type === "even" ? valIteration += 2 : valIteration += 1 
    }

    return sumVal
}

console.log(getSumOfNumber(4,"even"));
console.log(getSumOfNumber(4,"odd"));
console.log(getSumOfNumber(4));
console.log(getSumOfNumber(4,""));
