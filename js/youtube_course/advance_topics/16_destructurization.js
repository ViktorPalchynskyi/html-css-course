function calcValues(a, b) {
   return [
      a + b,
      a - b,
      a * b,
      a / b
   ]
}

// Arrays
const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)


// const sum = result[0]
// const sub = result[1]
// const [sum, sub] = result




// console.log(sum, mult, other, sub)

// Objects


const person = {
   name: 'Misha',
   age: 22,
   adress: {
      contry: 'Ukraine',
      city: 'Kharkov'
   }

}

// const { name: firstName = 'No name', age, car = false, adress: { city: homeTown, contry } } = person


// const { name, ...info } = person


// console.log(name, info)


function logPerson({ name, age }) {
   console.log(name + ' ' + age)
}

logPerson(person)