// Milk -40, Bread- 20, Banana- 10, Orange- 5, Apple- 6, Tomato -5
// + - * / %

const product = "Milk"

switch (product) {
  case 'Milk': {
    console.log('The price of Milk is 40den.')
    break
  }

  case 'Bread': {
    console.log('The price of Bread is 20den.')
    break
  }

  case 'Banana': {
    console.log('The price of Banana is 10den.')
    break
  }

  case 'Orange':
  case 'Tomato': {

    let variable = 'I am buying some tomatoes'
    console.log(variable)
    console.log('The price of the product is 5den.')
    break
  }

  case 'Apple': {
    console.log('The price of Apple is 6den.')
    break
  }

  default: {
    console.log('Unknown product')
    break
  }
}



// VEZBA-1


const den = 'petok'

switch (den) {
    case 'ponedelnik':
    case 'vtornik':
    case 'sreda':
    case 'cetvrtok':
    case 'petok': {
        console.log('Raboten den')
    break
    }

    case 'sabota':
    case 'nedela':{
        console.log('Viiikend')
    break
    }

    default: {
        console.log('Nepostoecki den')
        break
    }

}

// VEZBA-2

const c = Number(prompt('Vnesi broj'))

if (c % 5 === 0) {
    console.log("Brojot e deliv so 5")
}
else{
    console.log("Brojot ne e deliv so 5")
}
