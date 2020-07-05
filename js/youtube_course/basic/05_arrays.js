// const cars = ['Mazda', 'Ford', 'BMW', 'Honda']

// const fib = [1, 1, 2, 5, 8, 13]

// console.log(cars)

// cars.push('Lada')


// cars.unshift('Renault')
// console.log(cars)


// const renault = cars.shift()
// const lada = cars.pop()

// console.log(cars)
// console.log(renault)
// console.log(lada)


// console.log(cars.reverse())



// const index = cars.indexOf('BMW')
// cars[index] = 'Porshe'
// console.log(cars)


// let findedPerson
// for (const person of people) {
//    if (person.budget === 5200) {
//       findedPerson = person
//    }
// }

// console.log(findedPerson)



// const index = people.findIndex(function (person) {
//    return person.budget === 5200
// })




// const person = people.find(function (person) {
//    return person.budget === 5200
// })

// const person = people.find(person => person.budget === 4200)


// console.log(person)




// console.log(cars.includes('Mazda'))

// map возвращает новый массих
// const upperCaseCars = cars.map(car => {
//    return car.toUpperCase()
// })

// console.log(upperCaseCars)


// const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)

// const toPow = fib.map(pow2)
// const filtredNumbers = toPow.filter(num => num > 20)
// console.log(toPow)
// console.log(filtredNumbers)



// Задача 1

// const text = 'Hello, we are studying js'
// const reverseText = text.split('').reverse().join('')

// console.log(reverseText)




// const people = [
//    { name: 'Viktor', budget: 4200 },
//    { name: 'Oleg', budget: 4600 },
//    { name: 'Jenya', budget: 1600 },
//    { name: 'Katya', budget: 5200 }

// ]

// const allBudget = people
//    .filter(person => person.budget > 2000)
//    .reduce((acc, person) => {
//       acc += person.budget
//       return acc
//    }, 0)

// console.log(allBudget)