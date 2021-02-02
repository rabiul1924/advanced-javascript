const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'}
];

//map
const names = students.map( s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

//filter
const bigger = students.filter( s => s.id>40);
console.log(bigger);

//find
const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);

//in array so many object here.then looping to find specific element this way