//Maps
const people =  [
    {
        name: 'bob',
        age: '20',
        position: 'developer',
    },
    {
        name: 'anna',
        age: '25',
        position: 'designer',
    },
    {
        name: 'susy',
        age: '30',
        position: 'the boss',
    },
];

const getAges = (persons) => (persons.ages)
//get Ages
const ages = people.map((person) => {
    return person.age;
});
const ages2 = people.map(getAges);
 
console.log(ages); 