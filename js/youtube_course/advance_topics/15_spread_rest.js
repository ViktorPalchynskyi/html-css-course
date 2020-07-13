const citiesRussia = ['Moscow', 'Pitersburg', 'Kazn']
const citiesEurope = ['Paris', 'Berlin', 'Warshava']

const citiesRussiWithPopulation = {
   Moscow: 20,
   SaintPetersburg: 8,
   Kazan: 5
}
const citiesEuropeWithPopulation = {
   Moscow: 26,
   Paris: 20,
   Berlin: 25,
   Warshava: 6
}
// Spead Разварачивает элементы массива

// console.log(...citiesRussia)
// console.log(...citiesEurope)


// const allCities = [...citiesRussia, 'Washigton', ...citiesEurope]
// const allCities = citiesEurope.concat(citiesRussia)
// console.log(allCities)



// console.log({ ...citiesRussiWithPopulation })

// console.log({ ...citiesRussiWithPopulation, ...citiesEuropeWithPopulation })
// console.log({ ...citiesEuropeWithPopulation, ...citiesRussiWithPopulation })

// Pracitce

// const numbers = [5, 37, 42, 17]

// console.log(Math.max(...numbers))


// const divs = document.querySelectorAll('div')
// const nodes = [...divs]

// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))


// Rest

function sum(a, b, ...rest) {
   console.log(rest)
   return a + b + rest.reduce((a, i) => a + i, 0)
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Spread!!
// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...other] = numbers

// console.log(a, b, other)


const person = {
   name: 'Max',
   age: 20,
   city: 'Moscow',
   country: 'Russia'
}

const { name, age, ...address } = person

console.log(name, age, address)