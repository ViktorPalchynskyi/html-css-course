const validator = {
   get(target, prop) {
      return prop in target ? target[prop] : `There is no ${prop} field`
   },

   set(target, prop, value) {
      if (value.length > 2) {
         Reflect.set(target, prop, value)
      } else {
         console.log('Length must be bigger then 2 symbols. Now is ' + value.length)
      }
   }
}

const form = {
   login: 'tester',
   password: '12345'
}
const formProxy = new Proxy(form, validator)

// console.log(formProxy.login)
// console.log(formProxy.password)
// console.log(formProxy.line)


// formProxy.password = '13'

// console.log(formProxy.password)


function log(massage) {
   console.log('[Log]: ', massage)
}

const proxy = new Proxy(log, {
   apply(target, thisArg, argArray) {
      if (argArray.length === 1) {
         Reflect.apply(target, thisArg, argArray)
      } else {
         console.log('Number of argumens is not the same')
      }
   }
})


proxy('Custom massage')
proxy('Custom massage', 2)
proxy()
