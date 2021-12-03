/*
// exécuter une fonction TOUTES les x temps

// window.setInterval(() => {
// TODO
// }, 1000)
// exécuter une fonction au APRES x temps

// window.setTimeout(() => {
// TODO
// }, 1000)
*/

function getTime(timezone) {
    // On récupérer l'heure de la machine du client (machine qui exécute le JS)

    let date = new Date();

    // convertir la date timestamps local (nombre de milliseconde depuis Enoch)

    let localTime = date.getTime();

    // calculer le delta entre le temps local et le temps UTC : getTimezoneOffset renvoie le delta en minutes que l'on converti en ms (60 (1ùn) * 1000 (1s));

    // si delta < 0 => avance par rapport à UTC
    // si delta < 0 => retard par rapport à UTC

    let localOffset = date.getTimezoneOffset() * 60 * 1000;

    // determniner l'heure UTC
    let utc = localTime + localOffset;

    // calculer l'heure de destination
    let location = utc + 3600000 * timezone;
    // mettre la date destination sous forme de chaine de date et la retourner
    return new Date(location);

}

let clocks = document.querySelectorAll('.clock');

setInterval(() => {
    // date paris
    date = new Date();
    clocks[0].querySelector('.date').textContent = date.toLocaleDateString('fr-FR');
    clocks[0].querySelector('.time').textContent = date.toLocaleTimeString('fr');
    
    for (let i = 1; i < clocks.length; i++) {
        let timezone = clocks[i].dataset.timezone;
        clocks[i].querySelector('.time').textContent = getTime(timezone).toLocaleTimeString();
        clocks[i].querySelector('.date').textContent = getTime(timezone).toLocaleDateString();
    }
}, 1000);
