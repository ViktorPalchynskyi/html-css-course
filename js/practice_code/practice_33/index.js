const characters = [
   {
       name: 'Luke Skywalker',
       height: '172',
       mass: '77',
       eye_color: 'blue',
       gender: 'male',
   },
   {
       name: 'Darth Vader',
       height: '202',
       mass: '136',
       eye_color: 'yellow',
       gender: 'male',
   },
   {
       name: 'Leia Organa',
       height: '150',
       mass: '49',
       eye_color: 'brown',
       gender: 'female',
   },
   {
       name: 'Anakin Skywalker',
       height: '188',
       mass: '84',
       eye_color: 'blue',
       gender: 'male',
   },
];


const greater100 = characters.filter(characters => characters.mass > 100);

// console.log(greater100);

const shorterC = characters.filter(character => character.height < 200);

const maleC = characters.filter(character => character.gender === 'male');


const names = characters.map(char => char.name);
const height = characters.map(char => char.height);

const oneMaleChar = characters.some(char => char.gender === 'male');
const allMaleChar = characters.every(char => char.mass < 50 && char.height <= 150);

const sortMass = characters.sort((a,b) => b.mass - a.mass);
const sortHeight = characters.sort((a,b) => b.height - a.height);
const sortName = characters.sort((a,b) => a.name < b.name ? -1 : 1);


const totalMass = characters.reduce((acc, cur) => acc + +cur.mass,0);

const totalNumberOfEye = characters.reduce((acc, cur) => {
   acc[cur.eye_color] ? acc[cur.eye_color]++ : acc[cur.eye_color] = 1;
   return acc;
}  ,{});

console.log(totalNumberOfEye);
