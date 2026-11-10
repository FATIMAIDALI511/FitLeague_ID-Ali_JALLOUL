let participantName = document.querySelector("#participantName")
let spanName = document.querySelector("#spanName")
let addparticipantbtn = document.getElementById('addparticipantbtn')
let participantPseudo = document.getElementById("participantPseudo")
let pseudoSpan = document.getElementById("pseudoSpan")
let form_participant = document.getElementById("form_participant")
let choisit_defit = document.getElementById("choisit-defit")


//afichage des defis disponibles:
affichage = () => {
    defis.forEach(defit => {
        choisit_defit.innerHTML += `<div class="choist-defit-card border rounded-lg p-4 hover:border-2 hover:border-[#C5F03A]">
                                <input type="checkbox" name="defi" class="checkbox-defi w-4 h-4 cursor-pointer" id="${defit.id}">
                                <label >${defit.titre}</label>
                            </div>`

    });
}
affichage()
// participant form validation the input
let participants = JSON.parse(localStorage.getItem("participants"))
function nameValidation() {
    if (participantName.value == "") {
        spanName.textContent = '*le nom est required'
        spanName.classList = 'rounded-lg p-2 text-[#F52727]'
        participantName.classList = 'border border-[#F52727] rounded-lg p-2 mt-2 mb-2 w-full'
    } else if (participantName.value.length < 3 || !/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(participantName.value)) {
        participantName.value = ""
        spanName.classList = 'rounded-lg p-2 text-[#F52727]'
        participantName.classList = 'border border-[#F52727] rounded-lg p-2 mt-2 mb-2 w-full'
        spanName.textContent = 'le nom est invalid'

    }
}
function pseudoValidation() {
    if (!(/^@[A-Za-z0-9_-]+(?![\s\S])$/.test(participantPseudo.value))) {
        pseudoSpan.classList = 'rounded-lg p-2 text-[#F52727]'
        participantPseudo.classList = 'border border-[#F52727] rounded-lg p-2 mt-2 mb-2 w-full'
        pseudoSpan.textContent = '*entrer un pseudoname commencer avec @'
    }
}
form_participant.addEventListener('submit', event => {
    event.preventDefault()
    nameValidation()
    pseudoValidation()
    if (form_participant.name.value != "" && form_participant.pseudo.value != "") {
        let participant = {
            username: form_participant.name.value,
            pseudoname: form_participant.pseudo.value,
            defits: []
        }
        document.querySelectorAll(".checkbox-defi").forEach(ele=>{
        if(ele.checked){
            participant.defits[participant.defits.length]=ele.id 
        }
    })
        participants.push(participant)
        localStorage.setItem("participants", JSON.stringify(participants))
        window.location.href = "Participants.html";
    }
})

participantName.addEventListener("input", () => {
    participantName.classList = ' border-[#818680] border rounded-lg p-2 mt-2 mb-2 w-full';
    spanName.textContent = "";
    spanName.classList = "";
})


participantPseudo.addEventListener('input', () => {
    pseudoSpan.classList = ''
    participantPseudo.classList = 'border border-[#818680] rounded-lg p-2 mt-2 mb-2 w-full'
    pseudoSpan.textContent = ''
})