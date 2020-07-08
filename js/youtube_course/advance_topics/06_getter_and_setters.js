const person = Object.create(
   {
      // Задаём прототип
      calculateAge() {
         console.log('Age:', new Date().getFullYear() - this.bithYear)
      }
   }, {

   name: {
      value: 'Viktor',
      // возможность итирации
      enumerable: true,
      // возможность перезаписи
      writable: true,
      //возможность удалять ключ
      configurable: true
   },
   bithYear: {
      value: 1998,
      enumerable: true,
      writable: false,
      configurable: false
   },
   age: {
      get() {
         return new Date().getFullYear() - this.bithYear
      },
      set(value) {
         document.body.style.background = 'red'
         console.log('Set age', value)
      }
   }
})

// console.log(person)

// const person = {
//    name: 'Viktor',
//    bithYear: 1998
// }



// person.name = 'Lena'

// delete person.name

for (let key in person) {
   if (person.hasOwnProperty(key)) {
      console.log('Key', key, person[key])
   }
}