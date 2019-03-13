'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (string) {
    let array = [];
    let words = string.split(' ');
    for ( let i = 0 ; i < words.length ; i++) {
        let word = words [i] ;
        array.push(word[0].toUpperCase()+ word.slice(1))
    }
    return array.join(' ')
}


//* Begin of tests
const assert = require('assert')

assert.equal(jadenCase('deux trois mots'),'Deux Trois Mots')
// End of tests */
