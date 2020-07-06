function hello() {
   console.log('Hello', this)
}


const person = {
   name: 'Viktor',
   age: 22,
   sayHello: hello,
   sayHelloWindow: hello.bind(window),
   logInfo: function (job, phone) {
      console.group(`${this.name} info:`)
      console.log(`Name is ${this.name}`)
      console.log(`Age is ${this.age}`)
      console.log(`Job is ${job}`)
      console.log(`Phone is ${phone}`)
      console.groupEnd()
   }
}

const lena = {
   name: 'Elena',
   age: 23
}

// передаём контест в скобках
// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '8-999-2123-3123')()

// сразу вызывает функцию 
// person.logInfo.call(lena, 'Frontend', '8-999-2123-3123')

// всегда передаём 2 параметра
// person.logInfo.apply(lena, ['Frontend', '8-999-2123-3123'])


// Example

const array = [1, 2, 3, 4, 5]

// function myltBy(arr, n) {
//    return arr.map(i => {
//       return i * n
//    })
// }


Array.prototype.multBy = function (n) {
   return this.map(i => {
      return i * n
   })
}

console.log(array.multBy(20))




// console.log(myltBy(array, 5))
