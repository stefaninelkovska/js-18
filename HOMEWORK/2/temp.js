// NAJNISKA I NAJVISOKA TEMPERATURA

const temp = [12, 15, 14, 20, 22, 30]

let najvisoka = temp[0]

for (let i = 0; i <= temp.length; i++) {
    if (temp[i] > najvisoka) {
        najvisoka = temp[i]
    }
}

console.log("Najvisokata temperatura e:", najvisoka)

var najniska = temp[0]

for (var i = 0; i <= temp.length; i++) {
    if (temp[i] < najniska) {
        najniska = temp[i]
    }
}

console.log("Najniskata temperatura e: ", najniska)