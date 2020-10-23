const posts = [
  {
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  },

];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1 * 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something goes wrong!');
      }
    }, 2 * 1000);
  });
}

// createPost({ title: 'Posts Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(err => console.log(err));    

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 12;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2 * 1000, 'Goodbye'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json());

async function init() {
  await createPost({ title: 'Posts Three', body: 'This is post three' });

  getPosts();
}

init();

// Promise.all([promise1, promise2, promise3, promise4])
//   .then((values) => console.log(values)); 

