const listDeDefis = document.getElementById("list-de-defis")

function afficheDefis() {

    defis.forEach((defi) => {
        listDeDefis.innerHTML +=
            `<div class="card1-defis border border-gray-200 bg-white rounded-xl pl-6 pt-8 pr-5 pb-8 flex gap-4 flex-col" id=${defi.id}>
                <div class="card-header flex items-center justify-between">
                    <p class="text-[#A0AAB3] font-semibold text-sm">${defi.sport}</p>
                    <p1 class="bg-[#C5F03A] rounded-xl w-18 h-6 font-semibold text-sm flex justify-center">Actif</p1>
                </div>
                <h2 class="text-2xl font-bold">${defi.titre}</h2>
                <div class="flex items-center justify-between text-sm font-semibold text-[#53605A]">
                    <p>Objectif :${defi.objectif} </p>
                    <p >${defi.unite}</p>
                    <p>Limite : ${defi.date}</p>
                </div>
                <div class="progress-container flex items-center justify-between">
                    <div class="bg-[#E6E6E6] w-2/2 h-4 rounded-lg">
                        <div class="bg-[#FF641F] w-1/2 h-4 rounded-lg"></div>
                    </div>
                    <p class="text-sm font-semibold text-[#A0AAB3]">50%</p>
                </div>
                <div class="card-actions flex items-center gap-4">
                    <div class="edit-button border rounded-xl h-10 w-23 justify-center items-center flex font-bold">
                        Modifier</div>
                    <div
                        class="delete-button border rounded-xl h-10 w-23 justify-center items-center flex font-bold text-[#FF641F]">
                        Supprimer</div>
                </div>
 

            </div>`


    })
}
afficheDefis()
