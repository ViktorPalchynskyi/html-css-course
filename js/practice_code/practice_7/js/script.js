function getAcces(password, callback) { 
  if (password === 1234){ 
    setTimeout(()=> { 
      callback([2,3,4,1,4]);
    }, 2*1000);
  } else { 
    console.log('Something goes wrong!');
  }
}


function double(arr, callback) { 
  setTimeout(()=> { 
    callback(arr.map(item => item*2));
  }, 4*1000);
}

getAcces(1234, answer => { 
  console.log(answer);
  double(answer, res => console.log(res));
});