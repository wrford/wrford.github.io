//Use this file to implement Part One of your project

var animal;




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

var edit = function(animalName, object){
    for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name){
            animals[i] = object;
        }
    }
    
};



var remove = function(animalName){
    for (var i = 0; i < animals.length; i++){
        if (animalName === animals[i].name){
            animals.splice(i, 1);
        }
    }
};


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



