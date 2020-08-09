"use strict";

//touchstart
//touchmove
//touchend
//touchenter
//toucheleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');
   box.addEventListener('touchstart', (e) => {
      e.preventDefault();

      console.log('start');
      console.log(e.targetTouches);
   });

   box.addEventListener('touchmove', (e) => {
      e.preventDefault();

      console.log(e.targetTouches[0].pageX);
   });

   // box.addEventListener('touchend', (e) => {
   //    e.preventDefault();

   //    console.log('end');
   // });
});

// touches
// targetTouches
// changedTouches