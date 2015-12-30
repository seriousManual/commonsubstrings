# Common Substrings [![Build Status](https://travis-ci.org/seriousManual/commonsubstrings.png)](https://travis-ci.org/seriousManual/commonsubstrings)

Calculates a list of common substrings between two strings

## Installation
````
npm i allcombinations --save
````

## Usage
````
var css = require('commonsubstrings')

console.log(css('may the force be with you', 'may the sauce be with you'))
//result: ['ce be with you', 'may the']
````