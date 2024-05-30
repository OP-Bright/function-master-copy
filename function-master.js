//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
    var newArr = [];
    for (let thing in object) {
        newArr.push(object[thing]);
    }
    return newArr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var newString = "";
    for (let property in object) {
        newString += property;
        newString += " "
    }
    newString = newString.slice(0, -1)
    return newString
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var newString = "";
    for (let property in object) {
        if (typeof object[property] !== "string") {

        } else {
            newString += object[property];
            newString += " "
        }
    }
    newString = newString.slice(0, -1)
    return newString
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array"
    } else {
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let arr = string.split(" ");
    let newString = "";
   for (let i = 0; i < arr.length; i++) {
    let newWord = capitalizeWord(arr[i]);
    newString += newWord
    newString += " "
   } 
   newString = newString.slice(0, -1)
   return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome" + " " + capitalizeWord(object.name) + "!"
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises) {
        if (object.noises.length > 0) {
            let newString = "";
            for (i = 0; i < object.noises.length; i++) {
                newString += object.noises[i];
                newString += " "
            }
            newString = newString.slice(0, -1)
            return newString; 
        } else {
            return "there are no noises"
        }
    } else {
        return "there are no noises"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word) === true) {
        return true
    } else {
        return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name)
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.friends) {
        for (let i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++ ) {
        let friendsList = array[i].friends
        let potentialName = array[i].name
        if (potentialName === name) {

        } else {
            if (friendsList.includes(name)) {

            } else {
                newArr.push(potentialName)
            }
        }
        }
    return newArr
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (let i = 0; i < array.length; i++) {
        for (let key in object) {
            if (key === array[i]) {
                delete object[key]
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (newArr.includes(array[i])) {
            //do nothing
        } else {
            newArr.push(array[i])
        }
    }
    return newArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}