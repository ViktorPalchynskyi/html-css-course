// function cerateCalcFunction(n) {
//    return () => {
//       console.log(1000 * n)
//    }
// }

// const calc = cerateCalcFunction(42)
// calc()



// function createIncrementor(n) {
//    return (num) => {
//       return n + num
//    }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)


// console.log(addOne(10))
// console.log(addOne(41))


// console.log(addTen(1))
// console.log(addTen(32))

// function urlGenerator(domane) {
//    return (url) => {
//       return `https://${url}.${domane}`
//    }
// }


// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(comUrl('youtube'))

// console.log(ruUrl('yandex'))
// console.log(ruUrl('vk'))


function bind(context, fn) {
   return (...args) => {
      fn.apply(context, args);
   }
}




function logPerson() {
   console.log(`Person: ${this.name}, ${this.age},${this.job} `)
}


const person1 = { name: 'Misha', age: 24, job: 'Frontend' }
const person2 = { name: 'Jora', age: 34, job: 'Backend' }


bind(person2, logPerson)()
bind(person1, logPerson)()
