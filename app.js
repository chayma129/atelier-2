"use strict";
/* exercice 1 */

document.getElementById("message1").innerHTML = "Bonjour les étudiants";
console.log("Bonjour les étudiants");

/* exercice 2 */

let prenom = prompt("Donner votre prénom :");
if (prenom != null && prenom.trim() != "") {
    document.getElementById("message2").innerHTML = "Bonjour " + prenom;
}
else {
    document.getElementById("message2").innerHTML = "Prénom non valide";
}
/* exercice 3 */

let resultat3 = "";

for (let i = 1; i <= 5; i++) {
    resultat3 = resultat3 + "Log " + i + "<br>";
}

document.getElementById("message3").innerHTML = resultat3;

/* exercice 4 */

function sommeEntre(a, b) {
    let somme = 0;

    for (let i = a + 1; i < b; i++) {
        somme = somme + i;
    }

    return somme;
}

function sommePairsEntre(a, b) {
    let somme = 0;

    for (let i = a + 1; i < b; i++) {
        if (i % 2 === 0) {
            somme = somme + i;
        }
    }

    return somme;
}

let a = Number(prompt("Donner a :"));
let b = Number(prompt("Donner b :"));

if (!Number.isFinite(a) || !Number.isFinite(b)) {
    document.getElementById("message4").innerHTML =
        "Veuillez saisir des nombres valides.";
}
else {
    if (a > b) {
        let aux = a;
        a = b;
        b = aux;
    }

    let resultat1 = sommeEntre(a, b);
    let resultat2 = sommePairsEntre(a, b);

    document.getElementById("message4").innerHTML =
        "Somme des entiers : " + resultat1 + "<br>" +
        "Somme des nombres pairs : " + resultat2;
}
/* exercice 5 */
function calculerMoyenne(dc1, dc2, ds) {
    return dc1 * 0.3 + dc2 * 0.3 + ds * 0.4;
}

let dc1 = Number(prompt("Donner la note DC1 :"));
let dc2 = Number(prompt("Donner la note DC2 :"));
let ds = Number(prompt("Donner la note DS :"));

let moyenne5 = calculerMoyenne(dc1, dc2, ds);

document.getElementById("message5").innerHTML =
    "Moyenne : " + moyenne5 + "<br>";

if (moyenne5 >= 10) {
    document.getElementById("message5").innerHTML += "Mention : Admis";
}
else {
    document.getElementById("message5").innerHTML += "Mention : Ajourné";
}
/* exercice 6 */

let notes6 = [];
let note6 = Number(prompt("Donner une note (valeur négative pour arrêter) :"));
while (note6 >= 0) {

    notes6.push(note6);

    note6 = Number(prompt("Donner une autre note :"));
}

if (notes6.length > 0) {

    let somme6 = 0;
    let min6 = notes6[0];
    let max6 = notes6[0];
    let i6 = 0;

    while (i6 < notes6.length) {

        somme6 = somme6 + notes6[i6];

        if (notes6[i6] < min6) {
            min6 = notes6[i6];
        }

        if (notes6[i6] > max6) {
            max6 = notes6[i6];
        }
        i6++;
    }
    let moyenne6 = somme6 / notes6.length;

    document.getElementById("message6").innerHTML =
        "Nombre de notes : " + notes6.length + "<br>" +
        "Moyenne : " + moyenne6 + "<br>" +
        "Note minimale : " + min6 + "<br>" +
        "Note maximale : " + max6;
}
else {
    document.getElementById("message6").innerHTML =
        "Aucune note saisie.";
}
/* exercice 7 */
let n7 = Number(prompt("Donner le nombre de lignes :"));
let caractere7 = prompt("Donner un caractère (*, #, 1) :");

let resultat7 = "";
for (let i = 1; i <= n7; i++) {

    for (let j = 1; j <= i; j++) {
        resultat7 = resultat7 + caractere7;
    }

    resultat7 = resultat7 + "<br>";
}

document.getElementById("message7").innerHTML = resultat7;
/* exercice 8 */
let resultat8 = "";
resultat8 = resultat8 + "<table border='1'>";
for (let i = 0; i <= 10; i++) {

    resultat8 = resultat8 + "<tr>";

    for (let j = 0; j <= 10; j++) {

        resultat8 = resultat8 + "<td>" + (i * j) + "</td>";

    }
    resultat8 = resultat8 + "</tr>";
}
resultat8 = resultat8 + "</table>";
document.getElementById("message8").innerHTML = resultat8;

/* exercice 9 */

let notes9 = [];
let note9 = Number(prompt("Donner une note (nombre négatif pour arrêter) :"));

while (note9 >= 0) {

    notes9.push(note9);
    note9 = Number(prompt("Donner une autre note :"));
}

if (notes9.length > 0) {
    let somme9 = 0;
    let min9 = notes9[0];
    let max9 = notes9[0];
    let admis9 = 0;
    let excellent9 = 0;

    for (let i = 0; i < notes9.length; i++) {

        somme9 = somme9 + notes9[i];

        if (notes9[i] < min9) {
            min9 = notes9[i];
        }

        if (notes9[i] > max9) {
            max9 = notes9[i];
        }
        if (notes9[i] >= 10) {
            admis9++;
        }

        if (notes9[i] >= 15) {
            excellent9++;
        }
    }
    let moyenne9 = somme9 / notes9.length;
    let pourcentage9 = (admis9 / notes9.length) * 100;
    document.getElementById("message9").innerHTML =
        "Moyenne de la classe : " + moyenne9.toFixed(2) + "<br>" +
        "Pourcentage de notes >= 10 : " + pourcentage9.toFixed(2) + "%<br>" +
        "Meilleure note : " + max9 + "<br>" +
        "Pire note : " + min9 + "<br>" +
        "Nombre total d'étudiants : " + notes9.length + "<br>" +
        "Nombre de notes >= 15 : " + excellent9;
}
else {
    document.getElementById("message9").innerHTML =
        "Aucune note saisie.";
}
/* exercice 10 */
function isAnneeBissextile(annee) {

    if (annee % 400 === 0 ||
        (annee % 4 === 0 && annee % 100 !== 0)) {

        return true;
    }
    else {
        return false;
    }
}
let annee = Number(prompt("Donner une année :"));
if (Number.isInteger(annee) && annee > 0) {

    if (isAnneeBissextile(annee)) {
        document.getElementById("message10").innerHTML =
            annee + " est une année bissextile.";
    }
    else {
        document.getElementById("message10").innerHTML =
            annee + " n'est pas une année bissextile.";
    }
}
else {
    document.getElementById("message10").innerHTML =
        "Veuillez saisir une année valide.";
}
