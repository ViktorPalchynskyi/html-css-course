function* strGenerator () { 
  yield 'H';
  yield 'E';
  yield 'L';
  yield 'L';
  yield 'O';
}

const str = strGenerator();

function* numberGen(n = 10) { 
  for(let i = 0; i < n; i++) { 
    yield i;
  }
}

const num = numberGen(3);

const iterator = { 
  gen(n=10) { 
    let i= 0;

    return { 
      next(){ 
        if (i < n) { 
          return {value: ++i, done: false};
        }
        return{value: undefined, done: true};
      }
    };
  }
};


function* gena(...params){ 
  console.log(params);
  let a = yield 1;
  console.log('1', a);
  
  let b = yield 3;
  console.log('2', b);
  
  let c = yield 2;
  console.log('2', c);
  return 'fsyoo';
}

let genIter = gena('params');
console.log(genIter);