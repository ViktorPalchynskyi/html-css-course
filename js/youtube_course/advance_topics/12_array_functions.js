const people = [
   { name: 'Viktor', age: 22, budget: 4000 },
   { name: 'Tanya', age: 20, budget: 2000 },
   { name: 'Lena', age: 29, budget: 6000 },
   { name: 'Misha', age: 26, budget: 2440 },
   { name: 'Ira', age: 18, budget: 4200 },
   { name: 'Arina', age: 32, budget: 3700 },
]

// for (let i = 0; i < people.length; i++) {
//    console.log(people[i])
// }

// for (let person of people) {
//    console.log(person)
// }

// ForEach

// people.forEach((person, index, pArr) => {
//    console.log(person)
//    // console.log(index)
//    // console.log(pArr)
// })


// people.forEach(person => console.log(person))


// Map преобразование текущего массива в новый массив
// const newPeople = people.map(person => `${person.name} (${person.age})`)

// console.log(newPeople)

// Filter
// const adult = []
// for (let i = 0; i < people.length; i++) {
//    if (people[i].age >= 21) {
//       adult.push(people[i])
//    }
// }

// console.log(adult)

// const adults = people.filter(person => person.age >= 21)
// console.log(adults)


// Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//    amount += people[i].budget
// }

// console.log(amount)

// const amount = people.reduce((total, person) => total + person.budget, 100000)

// console.log(amount)

// Find

// const lena = people.find(person => person.name === 'Lena')
// console.log(lena)


// FindIndex

// const lenaIndex = people.findIndex(person => person.name === 'Lena')
// console.log(lenaIndex)


// ================================================


const amount = people
   .filter(person => person.budget >= 4000)
   .map(person => {
      return {
         info: `${person.name} (${person.age})`,
         budget: Math.sqrt(person.budget)
      }
   })
   .reduce((total, person) => total + person.budget, 0)


console.log(amount)