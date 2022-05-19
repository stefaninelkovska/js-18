const fullName = 'George Raymond Richard Martin'
// "GRRM"

function getInitials (name) {

  const nameArray = name.split(' ') // ['George', 'Raymond', 'Richard', 'Martin']

  return nameArray.reduce ( (accumulator, current) => {
   return accumulator = accumulator + current.charAt(0)

    // prvo => '' + George.charAt(0)
    // vtoro => G + Raymond.charAt(0)
    // treto => GR + Richard.charAt(0)
    // cetvrto => GRR + Martin.charAt(0)
    // posledno => GRRM
  }, '')

}

console.log(getInitials(fullName))