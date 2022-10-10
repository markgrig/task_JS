const coffees = ['Latte', 'Capuccino', 'Americano']

const coffee = prompt("Поиск кофе по названию:")

if ( coffee )  {

    const number = coffees.findIndex( element => { 
        return element.toLocaleLowerCase() == coffee.trim().toLocaleLowerCase()
    })

    if ( number !=-1  )  {
            alert(`Держите ваш любимый кофе coffee. Он ${number+1}-й по популярности в нашей кофейне.`)
    }

}