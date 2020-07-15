const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)

// console.log(symbol === other)

const obj = {
   name: 'Elena',
   demo: 'DEMO',
   [symbol]: 'meta'
}

// console.log(obj[])

for (let key in obj) {
   console.log(key)
}

console.log(obj.demo)
console.log(obj[symbol])