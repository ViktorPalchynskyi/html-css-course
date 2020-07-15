class Person {

   type = 'human'

   constructor(name) {
      this.name = name
   }

   greet() {
      console.log(this.name + ' says hello')
   }

}

const max = new Person('Max')



// max.greet()

// console.log(max)
// console.log(max.type)


// console.log(max.__proto__ === Person.prototype)

class Programmer extends Person {
   constructor(name, job) {
      super(name)
      this._job = job
   }

   get job() {
      return this._job.toUpperCase()
   }
   set job(job) {
      if (job.length < 2) {
         console.log('Validation failed')
      } else {
         this._job = job
      }

   }

   greet() {
      super.greet()
      console.log("I'm a fullstack developer")
   }
}

const fullstack = new Programmer('Max', 'Fullstack')

// console.log(fullstack)
// fulls tack.greet()

// console.log(fullstack.job)
fullstack.job = 'Senior'
// console.log(fullstack.job)

// Static

class Util {
   static average(...args) {
      return args.reduce((acc, i) => acc += i, 0) / args.length
   }
}

const res = Util.average(1, 1, 2, 3, 5, 8, 13)

// const util = new Util()

// console.log(util.average(1, 1, 2, 3, 5, 8, 13))
console.log(res)