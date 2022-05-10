// nizi (arrays)
// redosledot na elementite vo edna niza e fiksen i sekoj element si ima svoja pozicija ili (index)

let animals = ["Cat", "Dog", "Parrot", "Rabbit"]
            // i = 0, i = 1,   i = 2,     i = 3


            // X elementi -- posledniot index ke bide x-1

console.log (animals)

// za site elementi od nizata

console.log (animals [1])
// So sredni zagradi i indeksot na elementot se pecati samo toj element

const friends = [
    "Aleksandar", // 0
    "Simona", // 1
    "Petar", // 2
    "Sanja", // 3
    "Angela", // 4
    "Gjorgji",
    "Marko"
  ]

  // friends = []
friends[2] = "Nesto drugo"

for (let index = 0; index < friends.length; index++) {
  console.log(friends[index])
}

// se dodava nov element na krajot na nizata
friends.push("Aleksandra")
console.log(friends)

// se dodava nov element na pocetok na nizata
friends.unshift("Kristijan")
console.log(friends)

// go brise posledniot element od nizata i go vraka vo promenliva
const izbrisan = friends.pop()

// go brise prviot element od nizata i go vraka vo promenliva
const izbrisan2 = friends.shift()

console.log(izbrisan, izbrisan2)
console.log(friends)

console.log(friends.concat(animals))


