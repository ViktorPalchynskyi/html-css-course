const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])



set.add(10).add(20).add(30)
// console.log(set)

// console.log(set.has(30))
// console.log(set.delete(1))
// console.log(set.clear())
// console.log(set.size)



// console.log(set.keys())

// for (let key of set) {
//    console.log(key * 10)
// }

// =======================================================================


function uniqeValuers(array) {
   return [...new Set(array)]
}

console.log(uniqeValuers([1, 2, 2, 2, 2, 2, 3, 3, 3, 1, 1, 1, 4, 5, 5, 6, 67, 7, 77, 7, 71, 1, 2]))