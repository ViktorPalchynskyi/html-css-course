

class AlertExtended extends Alert{ 

   constructor(text,css,selector, icon) { 
     super(text,css,selector);
     this.icon = icon;
   }
 
   showIconAlert(){ 
     document.querySelector(this.selector).innerHTML = `<p class="${this.cssClass}"><span class="material-icons">${this.icon}</span>${this.message}</p>`;
   }
 }