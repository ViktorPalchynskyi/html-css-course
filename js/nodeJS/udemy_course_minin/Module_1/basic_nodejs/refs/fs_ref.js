const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'notes'), err=>{ 
//    if(err) throw new Error(err);

//    console.log('Dir was maken');
// });

// fs.writeFile(
//    path.join(__dirname, 'notes', 'mynotes.txt'),
//    'Hello NodeJS',
//    err => { 
//       if(err) throw err;
//       console.log('File was created');

//       fs.appendFile(
//          path.join(__dirname, 'notes', 'mynotes.txt'),
//          ' I try hard to get a job', 
//          err => { 
//             if(err) throw err;
//             console.log('File was changed');

            
//             fs.readFile(
//                path.join(__dirname, 'notes', 'mynotes.txt'),
//                'utf-8',
//                (err, data) => { 
//                   if(err) throw err;
//                   console.log(data);
//                }
//             );
//          }
//       );
//    }
// );


fs.rename(
   path.join(__dirname, 'notes', 'mynotes.txt'),
   path.join(__dirname, 'notes', 'notes.txt'),
   err => { 
      if(err) throw err;

      console.log('File was renamed');
   }
);