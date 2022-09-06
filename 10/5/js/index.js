const getTotalPriceOfShoppingBag = function ( shoppingBag ) {
    const groceries = {
        "Orange Juice": {
        price : 1.5,
        discount: 10,
        },
        "Chocolate": {
        price : 2,
        discount : 0,
        }
    }

    let price = 0
    let WithDiscont = 0 
    let quantity = 0 

    return res = shoppingBag.reduce ( ( acc , el ) => { 
        price =  groceries[el.product].price
        WithDiscont = ( (100 - groceries[el.product].discount)/100)
        quantity = el.quantity
        return acc = acc +  price*WithDiscont*quantity;
      } , 0 )
}

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
]

    const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
    console.log('totalPrice', totalPrice); // Возвращает 37.05
    