

const titre = document.getElementById("titre")
const sport = document.getElementById("sport")
const date = document.getElementById("date")
const objectif = document.getElementById("objectif")
const unite = document.getElementById("unite")

const creer = document.getElementById("creer")
const annuler = document.getElementById("annuler")

const cardTitre = document.getElementById("cardTitre")
const cardSport = document.getElementById("cardSport")
const cardObjectif = document.getElementById("cardObjectif")
const cardData = document.getElementById("cardDate")
const cardUnite = document.getElementById("cardUnite")


const error_titredefi = document.getElementById("erreur-titre")
const error_sport = document.getElementById("erreur-sport")
const error_date = document.getElementById("erreur-date")
const error_objectif = document.getElementById("erreur-objectif")
const error_unite = document.getElementById("erreur-unite")



creer.addEventListener("click", () => {
    const titredefi = titre.value;
    const sportchoisi = sport.value;
    const datelimit = date.value;
    const objectifDefi = objectif.value;
    const unitechoisi = unite.value;


    if (titredefi == '') {
        error_titredefi.textContent = "Titre is required."
    }

    if (sportchoisi == '') {
        error_sport.textContent = "Choisir un sport."
    }

    if (objectifDefi <= 0 || objectifDefi == '') {
        error_objectif.textContent = "L’objectif doit être un nombre positif."
    }

    if (unitechoisi == '') {
        error_unite.textContent = "Choisir un unite."
    }

    cardTitre.textContent = titredefi
    cardSport.textContent = sportchoisi
    cardObjectif.textContent = objectifDefi
    cardData.textContent = datelimit
    cardUnite.textContent = unitechoisi


  

})

titre.addEventListener("input", () => {
    error_titredefi.textContent = '';
})

sport.addEventListener("input", () => {
    error_sport.textContent = '';
})

objectif.addEventListener("input", () => {
    error_objectif.textContent = '';
})

unite.addEventListener("input", () => {
    error_unite.textContent = '';
})


annuler.addEventListener("click", () => {
    titre.value = "";
    sport.value = "";
    date.value = "";
    objectif.value = "";
    unite.value = "";
})









