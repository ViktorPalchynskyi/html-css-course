// 1 Функции


// Function Expression
// const greet2 = function greet2(name) {
//    console.log(`Hello ${name}`)
// }



// greet('Lena')
// greet2('Vika')


// Function Declaration
// function greet(name) {
//    console.log(`Hello ${name}`)
// }


// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции


// let counter = 0


// const interval = setInterval(function () {
//    if (counter === 5) {
//       clearInterval(interval)
//    } else {
//       console.log(++counter)
//    }
// }, 1000)

// 3 Стрелочная функция


// function greet(name) {
//    console.log(`Hello ${name}`)
// }


// const arrow = (name) => {
//    console.log(`Hello - ${name}`)
// }

// const arrow2 = name => console.log(`Hello - ${name}`)



// arrow('Viktor')
// arrow2('Tanya')

// const pow2 = num => {
//    return num ** 2
// }

// const pow2 = num => num ** 2

// console.log(pow2(5))


// 4 Параметры по умолчанию

const sum = (a = 40, b = a * 2) => a + b

console.log(sum())

function sumAll(...all) {

   let result = 0
   for (let num of all) {
      result += num
   }
   return result
}

const res = sumAll(12, 24, 5, 7, 313)
console.log(res)


// 5 Замыкания

function createMember(name) {
   return function (lastName) {
      console.log(name + lastName)
   }
}


const logWithLastName = createMember('Viktor')
console.log(logWithLastName('Palchynskyi'))
console.log(logWithLastName('Lenin'))