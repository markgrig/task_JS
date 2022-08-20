const userName = prompt("Как вас зовут?")
if ( userName !== null ) {
    alert(`Вас зовут  ${ userName.trim().toLowerCase() }` ); // вырезать пробелы в начале и в конце 
}

const userAge = Number( prompt("Сколько вам лет?") )

if ( isNaN(userAge) ) {
    alert(`Некорректрый возраст`); 
}
else {
    alert(`Вас зовут ${userName} и вам ${userAge} `);  
}

