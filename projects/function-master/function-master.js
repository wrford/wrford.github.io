// Should take an object and return its values in an array
function objectValues(obj){
    var output = [];
    for (var key in obj){
        output.push(obj[key]);
    }
    return output;
}

// keysToString() : Should take an object and return all its keys in a string each separated with a space 
function keysToString(obj){
    return Object.keys(obj).join(' ');
}

// function keysToString(obj){
//     var output = '';
//     for (var key in obj){
//         if (obj.key ===obj[obj.length-1]){
//             output += key;
//         }
//         else
//         output += key;
//         output += ' ';
        
//     }
//     return output;
// }

// valuesToString() : Should take an object and return all its string values in a string each separated with a space
function valuesToString(obj){
    var output = '';
    for (var key in obj){
        if(typeof obj[key] === 'string'){
        output += obj[key];
        output += ' ';
        };
    }
    return output.trim();
    
   // return objectValues(obj).toString().join(' ');
}


//arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object 
function arrayOrObject(arg1){
    if (Array.isArray(arg1)) return 'array';
    else  return 'object';
}

// capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(str){
    var firstChar = str.substr(0,1);
    // or word[0]
    var rest = str.substr(1);
    return firstChar.toUpperCase() + rest;
}

function capitalizeAllWords(str){
    var split = str.split(' ');
    
    var out = '';
    
    for (var i =0;i<split.length; i++){
        out += capitalizeWord(split[i]) + ' ';
    }
    return out.trim();
}


// welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'

function welcomeMessage(obj){
    
    return 'Welcome' + ' ' + capitalizeWord(obj.name) + '!';
}

// profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'

function profileInfo(obj){
    return capitalizeWord(obj.name) + ' is a ' + capitalizeWord(obj.species);
}

// maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises' 

function maybeNoises(obj){
    console.log(obj.noises);
    if (obj.noises === undefined){
        return 'there are no noises';
        
    } else if (obj.noises.length<1) return 'there are no noises';
    else return obj.noises.join(' ');
}

// hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.

function hasWord(wordString, word){
    if (wordString.includes(word)) return true;
    else return false;
    
}

// addFriend() : Should take a name and an object and add the name to the object's friends array then return the object

function addFriend(name, obj){
    obj.friends.push(name);
    return obj;
}

// isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
function isFriend(name, obj){
    console.log(obj.friends);
    // var found = obj.friends.indexof(name);
    if (obj.friends===undefined) return false;
    return obj.friends.includes(name);
}

function arrayIncludes(array, element){
    return (array.indexOf(element)> -1);
}


// nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, people){
    var out = [];
    //find the object representing the named person
        //go through all the people in the list
        //if current person's nameis the same as the obj.name, save that object to a variable
    //get that persons friends list    
    var person; 
    for (var i = 0; i<people.length; i++){
        if (people[i].name === name) person = people[i];
    }
    var friends = person.friends;
    
    //go through all other  people in list, 
    //then ask whether this persons name in the named persons friends list?
    //if not add that name to output array
    for (var j = 0; j<people.length; j++){
        var currentPerson = people[j];
        if(people[j] === person) continue;
        
        if(!arrayIncludes(friends, currentPerson.name)){
            out.push(currentPerson.name);
        }
    }
    
    return out;
} 

// updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>.
//If <key> does not exist on <object> create it. 

function updateObject(obj, key, value){
    obj[key] = value;
    return obj;
}

// removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

function removeProperties(obj, stringArray){
    var editedObj = obj;
    for (var key in obj){
    }   
    return editedObj;
}

