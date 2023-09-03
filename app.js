fs = require('fs');

const gender = ['M', 'K'];
const maleNames = ['Janek', 'Tadek', 'Arek', 'Gienek', 'Michał'];
const femaleNames = ['Janka', 'Marysia', 'Daniela', 'Dorota', 'Mariola'];
const lastName = ['Brożek', 'Fiołek', 'Mickiewicz', 'Niemen', 'Duda'];
const age = [15, 20, 30, 25, 18];
const people = [];

const randChoice = (arr) => {
    const arrLength = arr.length;
    const los = Math.floor(Math.random() * arrLength);
    return(arr[los]);
};

for(let i=0; i <=20; i++){
    const gen = randChoice(gender);
    if(gen === 'M') {
        const mName = randChoice(maleNames);
        const lName = lastName[Math.floor(Math.random() * lastName.length)];
        const agePersone = age[Math.floor(Math.random() * lastName.length)];
        people.push({'gender':gen, 'name':mName, 'lastname':lName, 'age':agePersone, 'email':mName.toLowerCase() + '.' + lName.toLowerCase() +'@gmail.com'});
    } else {
        const mName = randChoice(femaleNames);
        const lName = lastName[Math.floor(Math.random() * lastName.length)];
        const agePersone = age[Math.floor(Math.random() * lastName.length)];
        people.push({'gender':gen, 'name':mName, 'lastname':lName, 'age':agePersone, 'email':mName.toLowerCase() + '.' + lName.toLowerCase() +'@gmail.com'});
    };
}

const peopleJson = JSON.stringify({people});

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
