const btns = document.querySelectorAll('button'),
   overlay = document.querySelector('.overlay');

// btn.onclick = () => alert('click');

let i = 0;

const deleteElement = (e) => {
   console.log(e.currentTarget);
   console.log(e.type);
   // i++;a
   // if (i == 1) {
   //    btn.removeEventListener('click', deleteElement);
   // }
};

btns.forEach((element) => element.addEventListener('click', deleteElement, {
   once: true
}));
// overlay.addEventListener('click', deleteElement);

// btn.addEventListener('click', () => alert('Second Click'));

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
   event.preventDefault();

   console.log(e.target);
});