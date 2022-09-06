const bodyElement = document.querySelector('body') 
//1 способ
// bodyElement.innerHTML = `
// <form class="create-user-form">
//     <label> 
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя">
//     </label>
//     <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль">
//     </label>
//     <button type="submit"> Подтвердить </button>
// </form>`

//2 способ 
const formElement = document.createElement('form')
formElement.className = "create-user-form"

const labelElement1 = document.createElement('label')
labelElement1.textContent = "Имя"
const labelElement2 = document.createElement('label')
labelElement2.textContent = "Пароль"

const inputElementUserName = document.createElement('input')
inputElementUserName.type =  "text"
inputElementUserName.name = "userName"
inputElementUserName.placeholder = "Введите ваше имя"


const inputElementPassword = document.createElement('input')
inputElementPassword.type  = "password"
inputElementPassword.name =  "password"
inputElementPassword.placeholder =  "Придумайте пароль"

const buttonElement = document.createElement('button')
buttonElement.type =  "submit"  
buttonElement.textContent = "Потвердить"

labelElement1.append(inputElementUserName)
formElement.append(labelElement1)
labelElement2.append(inputElementPassword)
formElement.append(labelElement2)
formElement.append(buttonElement)
bodyElement.append(formElement)


