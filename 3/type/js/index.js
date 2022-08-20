//строки
const str = "mark"
//числа
const number = 5
//bool
const flag = true
//ничего
const var_null = null 
//неизвестный 
let new_val
//объект
const object = {
    one: 1 ,
    two: 2
}
//символы
const sym = Symbol("id")
//большие числа
const BigInt = 10n;

console.log(str);
console.log(number);
console.log(flag);
console.log(var_null);
console.log(new_val);
console.log(object);
console.log(sym);
console.log(BigInt);

//переопределение 
new_val = 18
console.log(new_val);
new_val = "18 string"
console.log(new_val);