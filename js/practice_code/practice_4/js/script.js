

async function getResponse(url) { 

let response = await fetch(url);
console.log(response.status);
console.log(response.ok);


if (response.ok){

let user = await response.json();
  for (let {id, title} of user){
    const div = document.createElement('div');
    div.style.backgroundColor = 'deepskyblue';
    div.style.border = '2px solid tomato';
    div.style.borderRadius = '100%';
    div.style.textAlign = 'center';

    div.innerText = `obj id is ${id} and title is ${title}`;

    document.body.append(div);
  }
} else { 
  console.log(`Error ${response.status}`);
}
 }

 getResponse('https://jsonplaceholder.typicode.com/posts');

 async function getUsers(names) { 

  let usersArr = [];

  

  for (let name of names) { 
    let request =  fetch(`https://api.github.com/users/${name}`).then(resolve => { 
      if(resolve.status != 200) { 
        return null;
      } else { 
        return resolve.json();
      }
    }, reject => { 
      return null;
    });
    
    usersArr.push(request);
  }

  let result = await Promise.all(usersArr);

  return result;

  }

  let loginArr = ['ViktorPalchynskyi','nuulone', 'sir13tommy'];

  let res = getUsers(loginArr);

  console.log(res);