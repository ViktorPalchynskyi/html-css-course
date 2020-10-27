class Alert { 

   constructor(text,css,selector) { 
     this.message = text;
     this.cssClass = css;
     this.selector = selector;
   }
   
   showAlert() { 
     document.querySelector(this.selector).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
   }
 
 }