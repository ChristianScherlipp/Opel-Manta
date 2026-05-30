


const startCard = document.getElementById('toRendercard');


function init() {
    renderStartCard()
}


function renderStartCard() {
    for (let startIndex = 0; startIndex < theStart.length; startIndex++) {
        startCard.innerHTML += renderContent(startIndex);
    }
}
