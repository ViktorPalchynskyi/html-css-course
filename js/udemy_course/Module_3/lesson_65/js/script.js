"use strict";

try {
   console.log('Normal');
   console.log(a);
   console.log('some');
} catch (error) {
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
} finally {
   console.log('Still normal');
}
