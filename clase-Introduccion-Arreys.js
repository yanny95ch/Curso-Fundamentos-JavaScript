//how to create an Array

//1.new Array() or Array()

const fruits= Array('apple', 'babana','orange');
console.log(fruits);

const justOneNumber= Array(12);
console.log(justOneNumber);

const number= Array(1,2,3,4,5,6,7,8);
console.log(number);

//2.Array literal syntax

const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);


const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports);

const recipeIngredients = [
    'flour',
    true,
    2,
    {
       Ingredients:  'milk', quantity: '1 cup'
    }, 
    false
];
console.log(recipeIngredients);


//Accessing Array 

const firsFruit = fruits[0];
console.log(firsFruit);

//lentg 
 const numberoffruits= fruits.length;
 console.log(numberoffruits);
 