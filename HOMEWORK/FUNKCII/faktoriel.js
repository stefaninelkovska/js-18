//  5! => 5*4*3*2*1

const factoriel = (number) => {
    let fact = 1
    for (let i = number; i >= 1; i--) {

        fact = fact*i
    }
    return fact
}
console.log (factoriel (5))

const factorielRecursive = (number) => {

    if (number <= 1) {
        return number
    }
    return number * factorielRecursive(number - 1);
}
console.log (factorielRecursive (5))