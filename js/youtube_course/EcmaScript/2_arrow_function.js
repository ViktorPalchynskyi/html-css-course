// function sum(a, b) {
//    return a + b
// }


// function cube(a) {
//    return a ** 3
// }

const sum = (a, b) => a + b
const cube = a => a ** 3


// console.log(sum(41, 1))
// console.log(cube(2))

// setTimeout(() => console.log('After 3 second'), 3000)


// Context


//  В контексте объекта, в котором была вызвана
function log() {
   console.log(this)
}

// Указывает на глобальный контест (который стоит выше)
const arrowLog = () => console.log(this)

const person = {
   name: 'Elena',
   age: 20,
   log: log,
   arrowLog: arrowLog,
   delayLog: function () {
      // const self = this
      setTimeout(() => {
         console.log(this.name + ' ' + this.age)
      }, 500)
   }
}

// person.log()
// person.arrowLog()


person.delayLog()