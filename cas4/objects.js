const person = {
    // object properties (svojstva)
    pol: 'mashki',
    vozrast: 20,
    visina: 170,
    tezina: 70,
    student: true
  }
  
  // kreiranje na kopija od objekt
  const nov = {...person}
  
  // key- value pairs
  person.pol = 'zenski'
  delete person.tezina
  person.ime = 'Stefani' // person['ime'] = 'Stefani'
  
  
  console.log(person)
  console.log(nov)
  
  const keys = Object.keys(person) // gi vrakja site klucevi od objektot kako array
  console.log(keys)
  
  const values = Object.values(person)
  console.log(values)