const http = require('http');

const options = { 
   host: 'localhost',
   port:8124,
   path: '/?file=secondary',
   method: 'GET'
};

const processPublicTimeline = (response) => {
   console.log('запрос окончен');
};

for(let i = 0; i < 2000; i++) { 
   http.request(options, processPublicTimeline).end();
}