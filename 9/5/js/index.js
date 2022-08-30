const clientsEstimations = []

const askClientToGiveEstimation = function () {
    const estimation = Number( prompt(`Как вы оцениваете нашу кофейню от 1 до 10?`))
    console.log(estimation);
    if ( 0 < estimation && estimation < 10)  {
        clientsEstimations.push(estimation)
    }
}

for (let index = 0; index < 5; index++) {
    askClientToGiveEstimation()
}

console.log(clientsEstimations);

const arrayGoodEstimations = clientsEstimations.filter( ( element ) => {  return element > 5 })
GoodEstimations = arrayGoodEstimations.length
BadEstimations = clientsEstimations.length - GoodEstimations

alert(`Положительных оценок ${GoodEstimations}`)
alert(`Отрицательных оценок ${BadEstimations}`)