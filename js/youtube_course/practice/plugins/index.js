const fruits = [
   { id: 1, title: 'Cherry', price: 20, img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-fruktov-na-rabochij-stol-1.jpg' },
   { id: 1, title: 'Kiwi', price: 40, img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-fruktov-na-rabochij-stol-8.jpg' },
   { id: 1, title: 'Orange', price: 25, img: 'https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-fruktov-na-rabochij-stol-20-1-650x406.jpg' }
]


const modal = $.modal({
   title: 'Viktor Modal',
   closable: true,
   content: `
   <h4>Modal is working</h4>
   <p>Lorem ipsum dolor sit.</p>
   `,
   width: '400px',
   footerButtons: [
      {
         text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
            modal.close()
         }
      },
      {
         text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
            modal.close()
         }
      }
   ]
})
