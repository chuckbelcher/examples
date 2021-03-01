const foods = ['Hot Dogs', 'Pizza', 'Wings', 'Burgers', 'Fries', 'Cake','Ice Cream',];
let family = [
    { name: { firstname: 'Chuck', lastname: 'Belcher'} , birthday: 'August 23, 1967', role: 'Father' },
    { name: { firstname: 'Christina', lastname: 'Belcher'} , birthday: 'March 5, 1975', role: 'Mother' },
    { name: { firstname: 'Matt', lastname: 'Lang'} , birthday: 'December 25, 1989', role: 'Son' },
    { name: { firstname: 'Britt', lastname: 'Beahm'} , birthday: 'November 22, 1992', role: 'Daughter' },
    { name: { firstname: 'Sean', lastname: 'Belcher'} , birthday: 'April 26, 1999', role: 'Son' },
    { name: { firstname: 'Haley', lastname: 'Belcher'} , birthday: 'April 26, 1999', role: 'Daughter' },
    { name: { firstname: 'Olivia', lastname: 'Gentile'} ,birthday: 'April 6, 2015', role: 'Grand Daughter' },
    { name: { firstname: 'Oliver', lastname: 'Lang'} ,birthday: 'October 31, 2016', role: 'Grand Son' },
];
console.log(foods);
console.table(family);

//find() and include() functions
const coolFoods = foods.find(item => item.includes('i')); //finds first entry in array with an i
console.log(`results of using .includes() ${coolFoods}`); //only displays Matt

const moreFoods = (foods) => { //Same as above, just longer
   return foods.includes('o');
}
const otherFoods = foods.find(moreFoods); 
console.log(otherFoods);

//More generic function
const favFood = word => foods.find(item => item.includes(word));
console.log(favFood('Dog'));

//filter() and include()
const secFavFood = word => foods.filter(item => item.includes(word));
console.log(secFavFood('Hot'));

const filterByAge = minAge => family.filter(member => member.age > minAge);
console.table(filterByAge(40));

//remove family members that are not old enough to drink
const underAgeFamily = family.filter(member => member.age < 21);
console.table(underAgeFamily);

//Check to see if there are any family members that is 21 with some().
console.log(family.some(member => member.age === 21));

//Check to see if everyone can get in the bar
console.log(family.every(member => member.age >= 21));

//List numbers using sort();
const numbers = [2,1,5,3,3,8,6,100, 302, 66]; //25:00
const numbersSorted = numbers.sort((first, second) => {
    //console.log(first,second);
    // if (first > second) {
    //     return 1;
    // } else if (first < second) {
    //     return -1;
    // } else {
    //     return 0;
    // }
    return first - second;
});
const numbersSorted2 = numbers.sort((first, second) => first - second); //same as above
console.log(numbersSorted2);

//forEach() array method
foods.forEach(food => {console.log(food)});

//map filter reduce

//map  

const biggerNumbers = numbers.map(number => `${number}${number}`);
console.log(biggerNumbers);

//note the double map
const reallyBigNumbers = numbers.map(number => `${number}${number}`).map(bigNumber => bigNumber * 2);
console.log(reallyBigNumbers);

//lest try with a array of objects --return array with name and age
const familyWithAge = family.map((person) => {
    console.log(person.name.firstname);

    //get birthday
    bday = new Date(person.birthday).getTime(); //turn into timestamp

    //figure out how old they are
    age = Math.floor((Date.now() - bday) / 31536000000)  //1000 milisec per sec * 60 sec per min * 60 min per hour * 24 hours per day * 365 days per year
    console.log(age);
    
    //return full name and bday in an object
    return {name: `${person.name.firstname} ${person.name.lastname}`, age};
});
console.table(familyWithAge);
