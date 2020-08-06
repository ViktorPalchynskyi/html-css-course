"use strict";

function first() {
   setTimeout(() => console.log(1), 500);
}

function second() {
   console.log(2);
}

first();
second();

function learnJS(lang, callback) {
   console.log(`I am studying: ${lang}`);
   callback();
}

function done() {
   console.log('I finished this lesson');
}

learnJS('JavaScript', () => console.log('I finished this lesson'));
learnJS('JavaScript', done);