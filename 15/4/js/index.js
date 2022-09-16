const giveJobToStudent = function( student, jobName) {
    student.job = jobName
    alert( ` Поздравляем у стедента ${student.fullName} появилась работа  ${student.job}`)
    return student
}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    }
    const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
    
console.log(updatedStudent);