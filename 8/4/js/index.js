const checkQuestionAnswer = function( qestions, correctAnswers ) {
    const answers = prompt(qestions)
    answers.trim().toLowerCase() === correctAnswers ? alert('Ответ верный') : alert('Ответ неверный')
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?','32')
checkQuestionAnswer('Как называется самая маленькая птица в мире?','колибри')