// alert(2)

// prompt('What is your name?')
// confirm('What is your name?')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('h2') // Всегда 1 элемент

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]



console.log(h2List)
console.log(heading2)
console.log(heading3)

// console.log(heading)
// console.dir(heading.textContent)

setTimeout(() => {
   addStylesTo(heading, 'JavaScript')
}, 2000)

setTimeout(() => {
   addStylesTo(heading2, 'Practice and...')
}, 3000)

setTimeout(() => {
   addStylesTo(heading3.children[0], 'It will work!')
}, 4500)



function addStylesTo(node, text, bgc = '#333', color = 'coral', fontSize = '2rem') {
   node.textContent = text
   node.style.color = color
   node.style.textAlign = 'center'
   node.style.backgroundColor = bgc
   node.style.padding = "2rem"
   node.style.display = "block"
   node.style.width = "100%"
   node.style.textDecoration = "none"
   node.style.border = '1px black solid'

   // falsy: '', undefined, null, 0, false
   if (fontSize) {
      node.style.fontSize = fontSize
   }
}

heading.onclick = () => {
   if (heading.style.color === 'coral') {
      heading.style.color = '#3E5F8A'
      heading.style.backgroundColor = '#FFB02E'
   } else {
      heading.style.color = 'coral'
      heading.style.backgroundColor = '#333'
   }
}


heading2.addEventListener('dblclick', () => {
   if (heading2.style.color === 'coral') {
      heading2.style.color = '#3E5F8A'
      heading2.style.backgroundColor = '#FFB02E'
   } else {
      heading2.style.color = 'coral'
      heading2.style.backgroundColor = '#333'
   }
})