// VEZBA-1

const Kvadrat = {
    sirina: 10,
    dolzina: 20
}

Kvadrat.plostina = Kvadrat.sirina * Kvadrat.dolzina
console.log (Kvadrat.plostina)

// VEZBA-2

const books = [
     {
         name: 'Crime and punishment',
         author: 'Fyodor Dostoyevsky',
         year: '1887',
         read: true
     },

     {
        name: 'Harry Potter',
        author: 'J.K. Rowling',
        year: '2000',
        read: false
    },

    {
        name: 'The art of war',
        author: 'Sun Tzu',
        year: '2000',
        read: false
    },

    {
        name: 'The Hobbit',
        author: 'J.R.R Tolkien',
        year: '1910',
        read: true
    },
]

for (let book of books) // ISTO SO - for (let i = 0; i < books.length; i++) { let book = books[i] 
{
    (!book.read) && console.log (book.name + ' ' + '- UNREAD')
}


// VEZBA-3
let avgMath = 0; 
let avgPhy = 0;
let avgChem = 0;

const students = [
    {
        id: 1,
        name: 'Stefani',
        grades: {
            math: 6,
            physics: 7,
            chemistry: 8
        }
    },

    {
        id: 2,
        name: 'Kristijan',
        grades: {
            math: 9,
            physics: 8,
            chemistry: 10
        }
    },

    {
        id: 3,
        name: 'Riste',
        grades: {
            math: 7,
            physics: 7,
            chemistry: 7
        }
    }
]



for ( let student of students) {
    avgMath = student.grades.math + avgMath
    avgPhy = student.grades.physics + avgPhy
    avgChem = student.grades.chemistry +avgChem
}

console.log ('Srednata ocenka po matematika e: ' + avgMath / students.length)
console.log ('Srednata ocenka po fizika e: ' + avgPhy / students.length)
console.log ('Srednata ocenka po hemija e: ' + avgChem / students.length)
