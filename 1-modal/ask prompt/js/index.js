var result

result = prompt("2 + 2 = ")
//проверка не нажал ли пользователь на cancel
if (result !== null) {
    //проверка условия
    if (result == "4" ) {
        alert("Вы правы!")
    }
    else {
        alert("Неверно!")
    }
}

result = prompt("Чему равен корень из 9?")
if (result !== null) {
    if (result == "3") {
        alert("Вы правы!")
    }
    else {
        alert("Неверно!")
    }
}

result = prompt("Сколько буде 2 в 5 степени?")
if (result !== null) {
    if (result == "64") {
        alert("Вы правы!")
    }
    else {
        alert("Неверно!")
    }
}


