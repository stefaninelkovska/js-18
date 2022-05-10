// CALCULATOR

let rezultat
const operator = prompt('Vnesi operator (+, -, *, /, %): ')


const broj1 = Number(prompt('Vnesi prv broj: '))
const broj2 = Number(prompt('Vnesi vtor broj: '))

switch(operator) {
    case '+': {
        console.log(rezultat = broj1 + broj2)
        break
    }
    case '-': {
        console.log(rezultat = broj1 - broj2)
        break
    }    
    case '*': {
        console.log(rezultat = broj1 * broj2)
        break
    }
    case '/': {
        console.log(rezultat = broj1 / broj2)
        break
    }
    case '%': {
        console.log(rezultat = broj1 % broj2)
        break
    }
    default: {
        console.log("Pogresen operator")
    }
}