"use strict"

// Pratique 3

// Complétez la fonction suivante afin qu'elle affiche un message de la manière suivante

// Titre : [titre]
// Object : [corps]

// Attention, si le [titre] est vide, il prend la valeur par défaut "Message sans titre"
// Si le message est urgent, il doit être présenté de la manière suivante :

// !!! URGENT !!!
// Titre : [titre]
// Object : [corps]

function afficheMessage(estUrgent, titre, corps) {
    
    let Titre = titre;
    let Object = corps;
    let defaultTitle= "Message sans titre"
    
    
    if (estUrgent === false && titre === undefined) {
        titre = defaultTitle
        console.log('titre : ' + titre + "\n" + Object);
        
    }else if (estUrgent === true && titre != undefined) {
        console.log("!!! URGENT !!!")
        console.log('titre : ' +" " + defaultTitle + "\n" + Object)
    }
    else if(estUrgent === false && titre != undefined){
        console.log('titre : ' + titre + "\n" + Object);
    }
}

// NE PAS MODIFIER APRES CETTE LIGNE

afficheMessage(false, "Salut !", "J'espère que tu vas bien.");
afficheMessage(true, "", "N'oublie pas d'acheter du pain !!!");
afficheMessage(false, "", "Ainsi font\nfont\nfont\nles petites marionnettes");