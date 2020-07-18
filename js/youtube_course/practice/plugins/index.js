let fruits = [
   { id: 1, title: 'Cherry', price: 20, img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-fruktov-na-rabochij-stol-1.jpg' },
   { id: 2, title: 'Kiwi', price: 40, img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-fruktov-na-rabochij-stol-8.jpg' },
   { id: 3, title: 'Orange', price: 25, img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-fruktov-na-rabochij-stol-20-1-650x406.jpg' }
]

const toHTML = fruit => `
   <div class="col">
      <div class="card">
         <img class="card-img-top" style="height: 300px;"
            src="${fruit.img}" alt= "${fruit.title}">
         <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary" data-btn = "price" data-id = "${fruit.id}">Look the cost</a>
            <a href="#" class="btn btn-danger" data-btn = "remove" data-id = "${fruit.id}">Delete</a>
         </div>
      </div>
   </div>`

function render() {
   const html = fruits.map(toHTML).join('')
   document.querySelector('#fruits').innerHTML = html
}

render()


const priceModal = $.modal({
   title: 'Product price',
   closable: true,
   // content: `
   // <h4>Modal is working</h4>
   // <p>Lorem ipsum dolor sit.</p>
   // `,
   width: '400px',
   footerButtons: [
      {
         text: 'Close', type: 'primary', handler() {
            priceModal.close()
         }
      },
      // {
      //    text: 'Cancel', type: 'danger', handler() {
      //       console.log('Danger btn clicked')
      //       modal.close()
      //    }
      // }
   ]
})



document.addEventListener('click', event => {
   event.preventDefault()
   const btnType = event.target.dataset.btn
   const id = +event.target.dataset.id
   const fruit = fruits.find(f => f.id === id)

   if (btnType === 'price') {

      priceModal.setContent(`
      <p>${fruit.title} cost <strong>${fruit.price}$</strong></p>
      `)

      priceModal.open()
      console.log(fruit)
   } else if (btnType === 'remove') {
      $.confirm({
         title: 'Are you sure?',
         content: `
         <p>Your are deleting: <strong>${fruit.title}</strong></p>
         `
      }).then(() => {
         fruits = fruits.filter(f => f.id !== id)
         render()
      }).catch(() => {
         console.log('Cancel')
      })

   }
})