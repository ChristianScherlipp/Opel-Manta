

function renderContent(startIndex) {
    return `<button id="cardStart" class="startCard" onclick="openDialog(${startIndex})">
                <img id="start-Picture${startIndex}" src="./assets/img/start/${theStart[startIndex]}" alt="${theStart[startIndex]}">
            </button>`;
}