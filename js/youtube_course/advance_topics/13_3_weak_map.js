
let obj = { name: 'weakmap' }


// const arr = [obj]


// obj = null


// console.log(obj)

// ключи только объекты
const map = new WeakMap([
   [obj, 'obj data']
])

// get set delete has

obj = null


// ================================================

const cache = new WeakMap()

function cacheUser(user) {
   if (!cache.has(user)) {
      cache.set(user, Date.now())
   }
   return cache.get(user)
}


let lena = { name: "Lena" }
let ira = { name: "Ira" }


cacheUser(lena)
cacheUser(ira)

lena = null


console.log(cache.has(lena))
console.log(cache.has(ira))