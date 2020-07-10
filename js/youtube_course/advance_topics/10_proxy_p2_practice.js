// Wrapper


const withDefaultValue = (target, defaultValue = 0) => {
   return new Proxy(target, {
      get: (obj, prop) => (prop in obj) ? obj[prop] : defaultValue
   })
}

const position = withDefaultValue({
   x: 24,
   y: 42
}, 0)


// Hidden proreries

const withHiddenProps = (target, prefix = '_') => {
   return new Proxy(target, {
      has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
      ownKeys: obj => Reflect.ownKeys(obj)
         .filter(p => !p.startsWith(prefix)),
      get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0
   })
}



const data = withHiddenProps({
   name: 'Viktor',
   age: 25,
   _uid: '2231223'
})

// Optimization

// const userData = [
//    { id: 1, name: 'Viktor', job: 'Fullstack', age: 22 },
//    { id: 2, name: 'Tanya', job: 'Blogger', age: 22 },
//    { id: 3, name: 'Lena', job: 'Teacher', age: 27 },
//    { id: 4, name: 'Lillia', job: 'Doctor', age: 32 }
// ]



// const index = {}
// userData.forEach(i => index[i.id] = i)

const IndexArray = new Proxy(Array, {
   construct(target, [args]) {
      const index = {}
      args.forEach(item => index[item.id] = item)
      return new Proxy(new target(...args), {
         get(arr, prop) {
            switch (prop) {
               case 'push':
                  return item => {
                     index[item.id] = item
                     arr[prop].call(arr, item)
                  }
               case 'findById':
                  return id => index[id]
               default:
                  return arr[prop]
            }
         }
      })
   }
})

const users = new IndexArray([
   { id: 1, name: 'Viktor', job: 'Fullstack', age: 22 },
   { id: 2, name: 'Tanya', job: 'Blogger', age: 22 },
   { id: 3, name: 'Lena', job: 'Teacher', age: 27 },
   { id: 4, name: 'Lillia', job: 'Doctor', age: 32 }
])


