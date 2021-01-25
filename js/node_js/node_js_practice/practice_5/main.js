console.log(process.execPath);
console.log(process.version);
console.log(process.platform);

process.stdin.resume();

process.stdin.on('data', (chunk) => { 
   process.stdout.write('data ' + chunk);
});

const buf = new Buffer(string);