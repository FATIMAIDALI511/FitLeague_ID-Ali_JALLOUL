// import {participants} from './ajouterParticipant.js'
// console.log(participants)
let participants = [
    {
        username: "fatima",
        pseudoname: "@fatima",
        defits: ["natation", "runing"],
    },
    {
        username: "sara",
        pseudoname: "@sara",
        defits: ["runing"],
    },
    {
        username: "ahmad",
        pseudoname: "@ahmad",
        defits: ["velo", "runing"],
    }
]
// afichage dynamique des participants:
let Participants_table_content = document.getElementById("Participants-table-content")
let affichageParticipants = () => {
    if(participants.length!=0){
     participants.forEach((participant) => {
        Participants_table_content.innerHTML += `<div class="participant-card flex justify-between items-center
                 pt-4 border-t border-[#818680] pb-4">
                 ${affichagename(participant.username, participant.pseudoname)}
      <div class="defis text-[#53605A]">${participant.defits}</div>
                    <div class="participant-card-modification-suppression flex gap-10">
                        <div class="card-actions flex items-center gap-4">
                            <div 
                                class="edit-button border rounded-xl h-10 w-23 justify-center items-center flex font-bold">
                                Modifier</div>
                            <div
                                class="delete-button border rounded-xl h-10 w-23 justify-center items-center flex font-bold text-[#FF641F]">
                                Supprimer</div>
                        </div>
                    </div>

                </div>`
    })
}else{
   Participants_table_content.innerHTML= `<div class="p-4 border h-100 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" class="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <p class="text-xl">no resultat found</p>
                </div>`
} 
}
let affichagename = (username, pseudoname) => {
    return `<div class="name pseudo">
                        <div class="name text-xl font-medium ">${username}</div>
                        <div class="pseudo text-[#53605A]">${pseudoname}</div>

                    </div>`
}
affichageParticipants()
