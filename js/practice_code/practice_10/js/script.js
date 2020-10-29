async function getRes(url) { 

  let request = await fetch(url);
  console.log(request);
  if(request.ok){ 
    let res = await request.json();
    return res;
  } else {
    throw new Error ('Wrong!');
  }

}

console.log(getRes('https://jsonplaceholder.typicode.com/todos'));




async function posRes(url, body) { 

  const request = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const res = await request.json();
  return res;
}

getRes('https://jsonplaceholder.typicode.com/posts')
  .then(data=> {
    console.log(data);
    for (let {id, title} of data) { 
      const div = document.createElement('div');
      div.style.backgroundColor = 'grey';
      div.innerText = `id is ${id} --- title is ${title}`;
      document.body.append(div);
    }
  });

posRes('https://jsonplaceholder.typicode.com/posts', {title: 'I am an idiot, who can\'t learn Promise API'})
  .then(post=> console.log(post));