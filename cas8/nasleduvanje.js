class Employee {
    id
    name
    surname
    accoundId

    constructor ( id, name, surname, accoundId) {
        this.id = id
        this.name = name
        this.surname = surname
        this.accoundId = accoundId
    }

    setId (id) {
        this.id = id
    }
}

class ITEmployee extends Employee {

    role // sysadmin, fe, be, project menager
    constructor(role) {
        super()
        this.role = role
    }
}

const IT1 = new ITEmployee('sysadmin', 5)
IT1.setId (3)
console.log(IT1)