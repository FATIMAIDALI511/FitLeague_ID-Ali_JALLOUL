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
// participants.forEach(participant=>{
//     participant.defits.forEach(defit=>{
//         console.log(defit)
//     })
// })

affichageParticipants = () => {
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
}
affichagename = (username, pseudoname) => {
    return `<div class="name pseudo">
                        <div class="name text-xl font-medium ">${username}</div>
                        <div class="pseudo text-[#53605A]">${pseudoname}</div>

                    </div>`
}
affichageParticipants()
