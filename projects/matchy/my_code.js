
// Open up my_code.js
//  Create a variable named animal and assign it to an empty object.
var animal = {};

//  Using dot notation give animal a property named species with a value of any animal species.
animal.species = 'Okapi johnstoni';

//  Using bracket notation give animal a property called name with a value of your animal`s name.
animal['name'] = 'Bernard';

//  Using either notation, give animal a property called noises with a value of empty array.
animal.noises = [];

//  run console.log(animal) and refresh your page to see what animal looks like.
console.log(animal);
// It should be something like:
// { species: 'duck', name: 'Jennifer', noises: [] }



// Create a variable named noises and assign it to an empty array.
var noises = [];

//  Using bracket notation give noises it's first element. A string representing a sound your animal might make.
noises[0] = 'Mooooo!';

//  Using an array function add another noise to the end of noises.
noises.push('Grrrrrr!');

//  Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US


//  Look through the functions until you find the one that will place an element at the begining of the array.


//  Add an element to noises using this function.
noises.unshift('Baaahhhhh!')

//  Using bracket syntax again, add another element to the end of noises. Make sure that the way you do this step would work no matter how many elements noises had. In other words, don't hard code the position of the new element.
noises[noises.length] = 'HEY';

//  console.log the length of noises
console.log(noises.length);
//  console.log the last element in noises again without hard coding the index.
console.log(noises[noises.length-1]);
//  console.log the whole array.
console.log(noises);

//  Does it look right?
//                      YEAH


//  Using bracket syntax, assign the noises property on animal to our new noises array.
animal['noises'] = noises;

//  Using any syntax add another noise to the noises property on animal.
animal.noises.push('BEEP BEEP');

//  console.log animal.
console.log(animal);
console.log(animal.noises);

//  Does it look right?




//  Create a variable named animals and assign it to an empty array.
var animals = [];

//  push our animal that we created to animals.
animals.push(animal);

//  inspect animals. What does it look like?
console.log(animals);

//  Create a variable called duck and assign it to the data:
// { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
var duck = { 
    species: 'Duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] };


//  push duck to animals
animals.push(duck);
//  inspect animals. What does it look like?
console.log(animals);
//  Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var tiger = {
    species: 'Tiger',
    name: 'Fred',
    noises: ['RUN', 'ROAR', 'MEOOOWWW']
    };
var antelope = {
    species: 'Antelope',
    name: 'Eeland',
    noises: ['Silence', 'footsteps', 'The Wind']
    };
animals.push(tiger, antelope);
//  inspect animals.
console.log(animals);
//  inspect the length of animals
console.log(animals.length);
//  Is everything looking right?

// Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

//  Choose a data structure for this list of friends.
//object to hold friends of each animal, each animal will be a key with an array of friends as it's value


//  Write a comment in your code that explains why you chose this data structure.
//  Create a variable called friends and assign it to the data structure that you chose.
var friends = [];
//  Take a look at the documentation for Math.random here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  Write a function that takes our animals array and returns a random element using Math.random
var getRandomAnimal = function(){
    
    var randomIndex = Math.floor(Math.random() * animals.length);
    console.log(randomIndex);
    return animals[randomIndex];

};

//  Using this function that you just created, get a random animal and add its name to friends.
var randomAnimal = getRandomAnimal(animals);

friends.push(randomAnimal.name);


//  inspect friends.
console.log(friends);
//  add friends as a property named friends on one of the animals in animals
antelope['friends'] = friends;
//  inspect your work.

console.log(antelope);

var tigerFriends = [];
tigerFriends.push(getRandomAnimal(animals).name);
tigerFriends.push(getRandomAnimal(animals).name);
tiger['friends'] = tigerFriends;




// Open up my_code.js in your editor.
// Implement a function called search that:

// Takes 1 paramater, a name of an animal
// Returns the animal's object if an animal with that name exists
// Returns null if no animal with that name exists
function search(searchName){
    var found = null;
    for (var i = 0; i < animals.length; i++){
        if (searchName === animals[i].name){
         found = animals[i];
         return found;
        }
        
    }
    return found;
};
//       convert for case insensitivity


// Use the search bar at the top of the page to make sure your function works.
//     HELL YEAH

// Write a function called edit that:
// Takes 2 parameters, a name of an animal and an object
// If an animal with that name exists, replace it's entire object with the new object
// Otherwise do nothing
// Test it on the website

var edit = function(animalName, object){
    for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name){
            animals[i] = object;
        }
    }
    
};

// Write a function called remove that:
// Takes 1 parameter, a name of an animal
// If an animal with that name exists, remove it
// Test that it works on the website

var remove = function(animalName){
    for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name){
            animals.splice(i, 1);
        }
    }
};

// Write a function called create that:
// Takes 1 parameter, an object
// Checks that the object has a name property with a length > 0
// Checks that the object has a species property with a length > 0
// Has a unique name, meaning no other animals have that name
// Adds this new object to the animals array, only if all the other conditions pass.
// Make sure it works

var create = function(object){
    if(object.name.length > 0 && object.species.length > 0){
        var exist = false;
        for( var i = 0; i < animals.length; i++){
            if (object.name === animals[i].name){
               exist = true;
            } 
        }
        if(exist === false){
            animals.push(object);
        }
    }
};



// function create(object){
//     if(object.name.length && object.species.length && !search(object.name)) 
//        animals.push(object);
// }

// function create(object){
//   if(!object.name.length && !object.species.length) return;  //don't need >0 since they evaluate that way
  
  
//   for( var i = 0; i < animals.length; i++){
//       if (object.name === animals[i].name){
//         return;
//       } 
//      }
//   animals.push(object);  
// };
