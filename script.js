

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









// page defis
// const listDeDefis = document.getElementById("list-de-defis")

// function afficheDefis() {

//     defis.forEach((defi) => {
//         listDeDefis.innerHTML +=
//             `<div class="card1-defis border border-gray-200 bg-white rounded-xl pl-6 pt-8 pr-5 pb-8 flex gap-4 flex-col" id=${defi.id}>
//                 <div class="card-header flex items-center justify-between">
//                     <p class="text-[#A0AAB3] font-semibold text-sm">${defi.sport}</p>
//                     <p1 class="bg-[#C5F03A] rounded-xl w-18 h-6 font-semibold text-sm flex justify-center">Actif</p1>
//                 </div>
//                 <h2 class="text-2xl font-bold">${defi.titre}</h2>
//                 <div class="flex items-center justify-between text-sm font-semibold text-[#53605A]">
//                     <p>Objectif :${defi.objectif} </p>
//                     <p >${defi.unite}</p>
//                     <p>Limite : ${defi.date}</p>
//                 </div>
//                 <div class="progress-container flex items-center justify-between">
//                     <div class="bg-[#E6E6E6] w-2/2 h-4 rounded-lg">
//                         <div class="bg-[#FF641F] w-1/2 h-4 rounded-lg"></div>
//                     </div>
//                     <p class="text-sm font-semibold text-[#A0AAB3]">50%</p>
//                 </div>
//                 <div class="card-actions flex items-center gap-4">
//                     <div class="edit-button border rounded-xl h-10 w-23 justify-center items-center flex font-bold">
//                         Modifier</div>
//                     <div
//                         class="delete-button border rounded-xl h-10 w-23 justify-center items-center flex font-bold text-[#FF641F]">
//                         Supprimer</div>
//                 </div>
 

//             </div>`


//     })
// }
// afficheDefis()
