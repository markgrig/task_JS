const existedUserLogin = 'markgrig'
const existedUserPassword = "123"

const userLogin = prompt("Введите логин")
userLogin ? userLogin.trim() : console.log("Имя пользователя не введено");

const userPassword = prompt("Введите пароль")
userPassword ?  userPassword.trim() : console.log("Пароль не введен");

userLogin === existedUserLogin  && userPassword === existedUserPassword 
?  alert(`Добро пожаловать, ${userLogin}`) : alert("Логин и (или) Пароль введены неверно!");