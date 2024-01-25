// Code du jeu pour deviner si un nombre est plus grand ou plus petit, en 10 coups
let nombreSecret = Math.floor(Math.random() * 100) + 1;
let nombreEssais = 10;
let nombre = 0;
let message = "";
let gagne = false;

while (nombreEssais > 0 && !gagne) {
    nombre = Number(prompt("Entrez un nombre entre 1 et 100: "));
    if (nombre < nombreSecret) {
        message = "Plus grand!";
    } else if (nombre > nombreSecret) {
        message = "Plus petit!";
    } else {
        message = "Bravo, vous avez gagné!";
        gagne = true;
    }
    nombreEssais--;
    alert(message);
}
