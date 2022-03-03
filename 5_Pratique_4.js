"use strict"

// Pratique 4

// Le but de cet exercice est de compléter la fonction "décrypte".
// Cette fonction prend en paramètre un mot crypté sous la forme d'un tableau de nombres
// Chaque nombre est simplement à l'index de la lettre correspondant dans le tableau alphabet
// Le but est que la fonction RETOURNE le mot décrypté sous la forme d'une chaîne de charactère
// Exemple decrypte([7, 4, 11, 11, 4]) retourne "hello"

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function decrypte(code) {
    
    for(code<code.length; code++;) {

        let code = code[index];
    }
    
    // for (let index = 0; index < alphabet.length; index++) {
        // console.log(code)
        for (const element of alphabet) {
        // const element = alphabet[index];
        // const result = console.log(parseInt(index,code))
        if (code === element) {
            console.log("ok")
            console.log(element)
        }
    }
        
       
        
        
    
    
}   // NE PAS MODIFIER APRES CETTE LIGNE
    
    console.log(decrypte([1, 14, 13, 9, 14, 20, 17]));
    console.log(decrypte([9, 0, 21, 0, 18, 2, 17, 8, 15, 19]));