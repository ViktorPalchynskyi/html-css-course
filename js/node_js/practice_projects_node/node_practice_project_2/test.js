const func = (params, cb) => {
   let a = 0;
   let b = 0;
   setTimeout(()=> {
      a = 2 * params.a;
      b = 2 * params.b;
      cb(a, b);
   }, 1000);
   
};


const params = {a: 20, b:75};

func(params, (a, b) => {
   console.log(a);
   console.log(b);
});