// 1 Переменные
// var name = "Viktor"
// const firtsName = 'Viktor'
// const lastName = 'Palchynskyi'
// // const age = 22
// const isProgrammer = true

// const _private = 'private'
// const $ = 'some value'

// const withNum6 = '6'

// 2 Мутирование
// console.log('Name: ' + firtsName + ', age is ' + age)  
// alert('Name: ' + firtsName + ', age ' + age)

// const firtsName = prompt('Type youre name: ')
// alert(firtsName + ' ' + lastName)

// 3 Операторы

// let cureentYear = 2020
// const birthYear = 1998

// const age = cureentYear - birthYear


// const a = 10
// const b = 5

// let c = 32


// c += a


// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(cureentYear++)
// console.log(cureentYear)
// console.log(++cureentYear)
// console.log(c)


// 4 Типы данных
// const isProgrammer = true
// const name = 'Viktor'
// const age = 26
// let x
// null

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)

// 5 Приоритет операторов


// const fullAge = 22
// const birthYear = 1998
// const cureentYear = 2020

// const isFullAge = (cureentYear - birthYear) >= fullAge

// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'ready'

// if (courseStatus === 'ready') {
//    console.log('Course is ready')
// } else if (courseStatus === 'pending') {
//    console.log('Course is in pending')
// } else {
//    console.log('Course is failed')
// }


// const isReady = true

// Тернарное выражение
// isReady ? console.log('Ready') : console.log('No ready')



// === сравнивает с учетом типов данных
// const num1 = 42
// const num2 = '42'

// console.log(num1 === num2)


// 7 Булевая логика

// 8 Функции

// function calcAge(year) {
//    return 2020 - year
// }

// // const myAge = calcAge(1998)
// // console.log(myAge)

// function logInfoAbout(name, year) {
//    const age = calcAge(year)

//    if (age > 0) {
//       console.log(name, age)

//    } else {
//       console.log('Fail')
//    }



// }


// logInfoAbout('Viktor', 1998)
// logInfoAbout('Viktor', 2021)

// 9 Массивы

// const cars = ['Mazda', 'Honda', 'Ford']
// console.log(cars)
// const cars = new Array('Mazda', 'Honda', 'Ford')
// console.log(cars)


// console.log(cars[0])
// console.log(cars.length)

// cars[0] = 'Porche'
// console.log(cars[0])
// cars[cars.length] = 'Mazda'
// console.log(cars)


// 10 Циклы

// const cars = ['Mazda', 'Honda', 'Ford', 'Porche']



// // for (let i = 0; i < cars.length; i++) {
// //    console.log(cars[i])
// // }

// for (let car of cars) {
//    console.log(car)
// }


// 11 Объекты

// const person = {
//    firtsName: 'Viktor',
//    lastName: 'Palchynskyi',
//    year: 1998,
//    languages: ['Ru', 'Ua', 'En', 'De', 'Jp'],
//    hasWife: false,
//    greet: function () {
//       console.log('Greeting!')
//    }
// }

// console.log(person.firtsName)
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// console.log(person['hasWife'])
// person.greet()