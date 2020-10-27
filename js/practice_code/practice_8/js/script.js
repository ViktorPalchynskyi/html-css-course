
class Animal { 

  static type = 'ANIMAL';

  constructor (options) { 
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice() { 
    console.log(`I am Animal!`);
  }
}

class Cat extends Animal{ 
  static type = 'CAT';

  constructor (options) { 
    super(options);
    this.color = options.color;
  }

  voice() {
    super.voice(); 
    console.log('I am cat');
  }

  get ageInfo() { 
    return this.age * 7;
  }

  set ageInfo(newAge) { 
    this.age = newAge;
  }
}
class Component { 

  constructor(selector) { 
    this.$el = document.querySelector(selector);
  }

  hide() { 
    this.$el.style.display = 'none';
  }

  show() { 
    this.$el.style.display = 'block';
  }
}

class Box extends Component { 
  
  constructor (options) { 
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.color;
  }
}

class Circle extends Box{ 

  constructor(options) { 
    super(options);

    this.$el.style.borderRadius = '50%';
  }

}

const box1 = new Box({ 
  selector: '#box1',
  size: 100,
  color: 'coral'
});

const circle1 = new Circle({ 
  selector: '#circle1',
  size: 100,
  color: 'tomato'
});

let myAlert = new Alert('Hi', 'skyblue', '.test');
let myAlertEx = new AlertExtended('I am extended', 'skyblue', '.test2', 'biotech');


myAlert.showAlert();
myAlertEx.showIconAlert();

let user = { 
  username: 'Ivan', 
  email: 'example@',
  _password: '',
  set password (pass) { 
    this._password = pass.trim();
  },
  get password() { 
    return this._password;
  }
};


user.password = ' Hello';
console.log(user.password);

let user2 = {};
user2.__proto__ = user;


user2.password = ' 123 345 123 ';

console.log(user2.email);

const al1 = { 
  message: 'Hello, my name is Viktor',
  css: 'tomato',
  selector: '.test3',
  show(){ 
    document.querySelector(this.selector).innerHTML = `<p class="${this.css}">${this.message}</p>`;
  }
};

al1.show();

const al2 = {};
Object.setPrototypeOf(al2, al1);

al2.message = 'Back here againg';
al2.css = 'deeppink';
al2.selector = '.test4';
al2.icon = 'biotech';


al2.show = function () { 
  document.querySelector(this.selector).innerHTML = `<p class="${this.css}"><span class="material-icons">${this.icon}</span>${this.message}</p>`;
};

al2.show();
