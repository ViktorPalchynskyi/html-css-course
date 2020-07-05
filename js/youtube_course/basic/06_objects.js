const person = {
   name: 'Viktor',
   age: 22,
   isProgrammer: true,
   // 'complex key': 'Complex Value',
   // ['key_' + (1 + 3)]: 'Computed Key',
   languages: ['ru', 'ua', 'en'],
   gree() {
      console.log(`Greet from person`)
   },
   info() {
      console.log('this', this)
      console.info('Information about person named:', this.name)
   }
}

// console.log(person.name)
// console.log(person['age'])
// console.log(person)


// person.age++
// person.languages.push('jp')
// console.log(person.age)
// console.log(person.languages)
// // person['key_4'] = undefined
// delete person['key_4']

// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages


// const { name, age: personAge = 10, languages } = person
// console.log(name, personAge, languages)

// опасен заходом в прототип
// for (let key in person) {
//    if (person.hasOwnProperty(key)) {
//       console.log('key:', key)
//       console.log('value', person[key])
//    }

// }

// Object.keys(person).forEach((key) => {
//    console.log('key:', key)
//    console.log('value', person[key])
// })


// Context

// person.info()

const logger = {
   keys() {
      console.log('Object Keys: ', Object.keys(this))
   },
   keysAndValues() {
      Object.keys(this).forEach(key => {
         console.log(`"${key}": ${this[key]}`)
      })
   },

   withParams(top = false, between = false, bottom = false) {
      if (top) {
         console.log('----- Start -----')
      }
      Object.keys(this).forEach((key, index, array) => {
         console.log(`"${key}": ${this[key]}`)
         if (between && index !== array.length - 1) {
            console.log('----------')
         }
      })

      if (bottom) {
         console.log('----- End -----')
      }

   }
}


// const bound = logger.keys.bind(person)
// bound()


// logger.keys.call(person)
// logger.keysAndValues.call(person)

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])