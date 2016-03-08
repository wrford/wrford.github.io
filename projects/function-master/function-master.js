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
    
    var output = 'Welcome' + ' ' + capitalizeWord(obj.name) + '!';
    return output.trim();
}

// profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'

function profileInfo(obj){
    var output = capitalizeWord(obj.name) + ' is a ' + capitalizeWord(obj.species);
    return output.trim();
}