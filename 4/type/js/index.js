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

console.log(Number(str), String(str) , Boolean(str));
console.log(Number(number), String(number), Boolean(number) );
console.log(Number(flag), String(flag), Boolean(flag));
console.log(Number(var_null), String(var_null), Boolean(var_null));
console.log(Number(new_val), String(new_val), Boolean(new_val));
console.log(Number(object), String(object), Boolean(object));
console.log( String(sym), Boolean(sym));
console.log(Number(BigInt), String(BigInt), Boolean(BigInt));

