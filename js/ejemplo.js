function calculate() {
    const number1 = document.querySelector('#number1').valueAsNumber
    const number2 = document.querySelector('#number2').valueAsNumber
    const operation = document.querySelector('#operation').value
    let result = ''

    switch (operation) {
        //parseInt --> para cambiar de texto a numero
        //valvueAsNumber --> se pone decimal al numero
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
    }

const divResult = document.querySelector('#result')
divResult.innerHTML = result


console.log(number1, number2, operation, result)
}
