
function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}

let userText = null

while ( userText == null ) {
    userText = prompt("Введите текст для обрезки")
        if ( userText !== null ) {
            console.log(`Введён текст: ${ userText.trim().toLowerCase() }` ) 
        }
        else {
            alert(`Вы не ввели текст`);
        }

    }

let start_i

while ( isNumber(start_i) == false ) {
    start_i = Number( prompt("Введите индекс, с которого нужно начать обрезку строки") )

    if ( isNaN(start_i) ) {
        alert(`Не число`); 
    }
    else {
        console.log(`Введённое число начала обрезки: ${start_i} `)  
    }
}

let end_i

while ( isNumber(end_i) == false ) {
    end_i = Number( prompt("Введите индекс, с которого нужно закончить обрезку строки") )

    if ( isNaN(end_i) ) {
        alert(`Не число`); 
    }
    else {
        console.log(`Введённое число начала обрезки: ${end_i} `)
    }
}

alert(userText.slice(start_i,end_i))
console.log(userText.slice(start_i,end_i))



