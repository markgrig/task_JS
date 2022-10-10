const question1 = "Сколько будет 2 + 2?"
const question2 = "Сколько будет 2 * 2?"
const question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
const question4 = "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
const question5 = "Сколько будет 2 + 2 * 2?"

let correctAnswers = 0, incorrectAnswers = 0

const userAnswer1 = Number(prompt(question1))
userAnswer1 === 4 ? ( alert("Ответ Верный" ) , correctAnswers++ ) : ( alert("Ответ Неверный") , incorrectAnswers++ )

const userAnswer2 = Number(prompt(question2))
userAnswer2 === 4 ? ( alert("Ответ Верный" ) , correctAnswers++ ) : ( alert("Ответ Неверный") , incorrectAnswers++ )

const userAnswer3 = Number(prompt(question3))
userAnswer3 === 1 ? ( alert("Ответ Верный" ) , correctAnswers++ ) : ( alert("Ответ Неверный") , incorrectAnswers++ )

const userAnswer4 = Number(prompt(question4))
userAnswer4 === 12 ? ( alert("Ответ Верный" ) , correctAnswers++ ) :( alert("Ответ Неверный") , incorrectAnswers++ )

const userAnswer5 = Number(prompt(question5))
userAnswer5 == 6 ?  ( alert("Ответ Верный" ) , correctAnswers++ ) : ( alert("Ответ Неверный") , incorrectAnswers++ )

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)