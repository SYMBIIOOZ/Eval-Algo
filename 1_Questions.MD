# QUESTIONS

## Définissez ce qu'est une variable

C'est le fait de donner un nom a une valeur que l'on veut reutilisé dans la fonction ou dans le document en entier. Suivant le types de variable utilisé celle ci peut être modifier. (par l'utilisateur ou par un algorithme dans une fonction)

## Quels sont les trois types principaux de variables

booléen -> retourne "true" ou "false"
numérique -> attend une valeur de type "number"
caractère -> attend une chaîne de caractère (string)

## Combien de valeurs différentes peut prendre une variable de type booléen ?

2 -> retourne "true" ou "false".

## Que se passe-t-il si l'on execute le code suivant ? Comment cela s'appelle-t-il ?

```
let debut = 0;

while (debut > 0) {
    console.log("Je continue");
    debut += 1;
}

console.log("J'arrête");
```

Cela va passer en dehors de la boucle car la condition (debut>0) n'est déjà pas bonne. on arrivera directement sur "console.log("J'arrête")

## Si je veux stocker une suite d'éléments dans une variable, que dois-je utiliser ?

On doit faire un tableau. 
exemple : const tab1 = []

## Qu'est ce que les paramètres d'une fonction ? Qu'est ce que le retour (return) d'une fonction ?

Les paramêtres d'une fonction servent à donner une valeur et que peut importe la valeur que l'on lui donne , l'algorithme effectura le calcul (evidemment du même type de valeur qu'attendu dans la fonction).

le return donne le resultat de la fonction ou ce qu'on lui demande de nous renvoyer.

exemple: return toto + tata