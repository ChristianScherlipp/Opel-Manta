


const startCard = document.getElementById('toRendercard');


function init() {
    
}


function renderStartCard() {
    for (let index = 0; index < array.length; index++) {
        startCard.innerHTML += `<button id="cardStart" class="placeholder" onclick="openDialog(${i})">
                                <img id="dogGallery-Picture${i}" src="./assets/img/gallery/${dogGallery[i]}" alt="${dogGallery[i]}">
                                </button>`;
    }
}
