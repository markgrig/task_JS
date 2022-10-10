const myName = 'Марк'
const progLang = 'Java-script'
const courseCreatorName = 'Владилен'
const reasonText = ' мне нравится программировать и разрабатывать сайты и приложения'
const numberOfMouth = '6'

let textinfo = `Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${progLang} на курсе по ${progLang} у ${courseCreatorName}. \n
Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этого я изучал ${numberOfMouth} месяцев. Я уверен, что пройду данный курс до конца!`

console.log(textinfo);

textinfo = textinfo.replaceAll(progLang , progLang.toUpperCase())
console.log(textinfo)
console.log(textinfo.length)
console.log(textinfo[0])
console.log(textinfo[textinfo.length-1])