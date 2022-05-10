// console.log("test")

// ">" "<" ">=" "<=" "!" "==" "!="

// const a = 5
// const b = 5

const a = Number(prompt("Vnesi prva vrednost"))
const b = Number(prompt("Vnesi vtora vrednost"))



if (a < b) {

    // kodot sto treba da se izvrsi dokolku uslovot e ispolnet
    console.log ( a + " e pomalo od " + b)

}
else if (a > b ) { 
    console.log( a + " e pogolemo od " + b )
}

else {
    // kodot sto ke se izvrsi dokolku nieden od gornite uslovi ne e ispolnet
    console.log (a + " e ednakvo na " + b )
}

const broj1 = 7
const broj2 = 20


if ((broj1 < broj2) && (broj1 < 10)) {
  console.log("brojot e ednocifren")
}

const username = prompt("Vnesete korisnicko ime")
const password = prompt("Vnesete password") 
console.log(password)

if (!password) {
  console.log("Ve molime vnesete validen password")
}






