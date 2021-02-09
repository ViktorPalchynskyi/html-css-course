// function sayHelloTo(name) {
//    const message = `Hello ${name}`;

//    return function () {
//       console.log(message);
//    };
// }

// const helloToViktor = sayHelloTo('Viktor');
// const helloToElena = sayHelloTo('Elena');
// helloToViktor();
// helloToElena();

// function  createFrameworkManager() {
//    const fw = ['Angular', 'React'];

//    return{ 
//       print: function () {
//           console.log(fw.join(' '));
//       }, 
//       add: function (framework) {
//          fw.push(framework);
//       }
//    };
// }

// const manager = createFrameworkManager();

// console.log(manager);
// manager.print();
// manager.add('NodeJS');
// manager.print();

// setTimeout

// const fib = [1,2,3,5,8,13];

// for(var i = 0; i < fib.length; i++) {
//    console.log(i);
   
//    setTimeout(() => { 
//       console.log(`fib ${i} = ${fib}`);
//    }, 1000);
// }

// for(var i = 0; i < fib.length; i++) {
//    (function (j) { 
//    setTimeout(() => { 
//       console.log(`fib ${j} = ${fib[j]}`);
//    }, 1500);
//    })(i);
// }