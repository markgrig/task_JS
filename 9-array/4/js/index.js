const coffees = ['Latte', 'Capuccino', 'Americano']
const prises = [ 1.5 , 1 , 2 ]
const updatedPrises = prises.map(
    prise => { return prise*0.5}
)

updatedPrises.forEach( (    prises, index) => {
    alert(`Кофу ${coffees[index]} стоит ${prises}`)
});


