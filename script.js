let name        = prompt('Введите ваше имя')
let currentYear = +prompt('Введите текущий год')
let birthYear   = +prompt('Введите ваш год рождения')

function age (a, b){
    return alert(`${name}, Вам ${a - b} лет`)    
}
age(currentYear, birthYear)

const numberOfEquation = +prompt('Введите колличество примеров:')

const operations = ["+", "-", "*", "/"]

for (let i = 0; i < numberOfEquation; i++) {
    const firstNumber = Math.round(Math.random() * 100)
    const secondNumber = Math.round(Math.random() * 100)

    const randomOperation = Math.round(Math.random() * 3)

    const result = +prompt(`Решите пример: ${firstNumber + operations[randomOperation] + secondNumber}`)

    if (operations[randomOperation] === "+") {
        const plus = firstNumber + secondNumber

        if (result === plus) {
            console.log("Правильно !");
        } else {
            console.log("Ошибка !");
        }
    } else if (operations[randomOperation] === "-") {
        const minus = firstNumber - secondNumber

        if (result === minus) {
            console.log("Правильно !");
        } else {
            console.log("Ошибка !");
        }
    } else if (operations[randomOperation] === "*") {
        const multiply = firstNumber * secondNumber

        if (result === multiply) {
            console.log("Правильно !");
        } else {
            console.log("Ошибка !");
        }
    } else {
        const divide = firstNumber / secondNumber

        if (result === divide) {
            console.log("Правильно !");
        } else {
            console.log("Ошибка !");
        }
    }
}

alert("Откройте консоль (F12) ")
