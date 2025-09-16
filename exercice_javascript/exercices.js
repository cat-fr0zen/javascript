console.log("Hello World !")


// exercice 1
const degres_celsius = -17;

function celsius_to_fahrenheit(celsius){
    return celsius * 9/5 +32;
}

console.log(celsius_to_fahrenheit(degres_celsius))

// exercice 2

const longeur = 2;
const Largeur = 3;

function calcul_aire_rectangle(L,l){
    return L * l;
}

console.log(calcul_aire_rectangle(Largeur,longeur))

//exercice 3

const prenom = "mille";
const nom = "pertuis";

console.log("vous êtes " + prenom + " " + nom)

//exercice 4 

const montant_ht = 20.99;
const TVA = 1.055

function montant_ttc(montant,tva){
    return montant * TVA
}

console.log(montant_ttc(montant_ht,TVA))

//exercice 5

console.log(((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true))

//exercice 6 

const poids = 65;
const taille = 1.63;

function CalculIMC(p,T){
    const imc = p / taille * taille ;
    return tofixed(imc);
}
console.log(CalculIMC(poids,taille))