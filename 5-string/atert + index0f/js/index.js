
function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}

let userText = null

while ( userText == null ) {
    userText = prompt("Введите текст")
        if ( userText !== null ) {
            console.log(`Введён текст: ${ userText.trim().toLowerCase() }` ) 
        }
        else {
            alert(`Вы не ввели текст`);
        }

    }

let wordFromText = null

while ( wordFromText == null ) {
    wordFromText = prompt("Введите cлово из текста")
        if ( wordFromText !== null ) {
            console.log(`Введёно слово: ${ wordFromText.trim().toLowerCase() }` ) 
           
        }
        else {
            alert(`Вы не ввели слово`);
        }

    }

if ( userText.includes(wordFromText) ) {
    const indexWord = userText.indexOf(wordFromText)
    alert(userText.slice(0, indexWord ))
    console.log(userText.slice(0, indexWord ))
}
else {
    alert(`этого слова нет в тексте`);
}


