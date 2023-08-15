// Initializing the default set of censored words
var defaultCensoredWords = ["sad", "bad", "mad"];

// Using ES6 Set to allow efficient add and lookup operations
var customCensoredWords = new Set();

// Function to censor the input string
function censor(inStr) {
    // Replacing censored words from the default set
    for (let word of defaultCensoredWords) {
        inStr = inStr.replace(new RegExp(word, "gi"), "****");
    }
    
    // Replacing censored words from the custom set
    for (let word of customCensoredWords) {
        inStr = inStr.replace(new RegExp(word, "gi"), "****");
    }
    
    return inStr;
}

// Function to add a word to the custom censored words set
function addCensoredWord(word) {
    customCensoredWords.add(word);
}

// Function to get the combined list of censored words
function getCensoredWords() {
    return [...defaultCensoredWords, ...customCensoredWords];
}

// Exporting the functions
module.exports = {
    censor: censor,
    addCensoredWord: addCensoredWord,
    getCensoredWords: getCensoredWords
};
