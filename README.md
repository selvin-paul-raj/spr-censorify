<h1 align=center>SPRHackz-Censority</h1>

# CustomCensorify

A JavaScript module for efficient text censorship. Replace sensitive words with asterisks in an easy and effective manner.

## Installation

```sh
npm install sprhackz-censorify
```

# Usage

```sh
// To Install package `npm i sprhackz-censorify`
var censor = require("sprhackz-censorify"); // To Import The Package

console.log("\n PreDefine  Censored Words : ");
console.log(censor.getCensoredWords());

// Censor a sample text
console.log(`\n ${censor.censor("Some very sad, bad and mad text.")}`);

// Add a custom censored word
console.log("\n To Add a Custom Censored Word :");
censor.addCensoredWord("gloomy");

// Output the updated list of censored words
console.log(censor.getCensoredWords());

// Censor another sample text

console.log(`\n ${censor.censor("A very gloomy day.")} \n`);

```

## Authors

- **Selvin PaulRaj k** - _Initial work_ - [SPR Hackz](https://github.com/SPRHackz)
