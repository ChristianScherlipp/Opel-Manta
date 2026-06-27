let currentIndex = 0;

function openGallery(startIndex = 0) {
    currentIndex = startIndex;
    buildThumbs();
    updateDialog();
    document.getElementById('galleryDialog').showModal();
}

function closeGallery() {
    document.getElementById('galleryDialog').close();
}

function changeImage(dir) {
    currentIndex = (currentIndex + dir + theStart.length) % theStart.length;
    updateDialog();
}

function updateDialog() {
    document.getElementById('dialogImg').src             = `./assets/img/start/${theStart[currentIndex]}`;
    document.getElementById('dialogImg').alt             = theStart[currentIndex];
    document.getElementById('dialogCounter').textContent = `${currentIndex + 1} / ${theStart.length}`;
    document.getElementById('dialogName').textContent    = theStart[currentIndex];

    document.querySelectorAll('.thumb').forEach((t, i) => t.classList.toggle('active', i === currentIndex));

    const active = document.querySelector('.thumb.active');
    if (active) active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
}

function buildThumbs() {
    const container = document.getElementById('dialogThumbs');
    container.innerHTML = '';
    theStart.forEach((file, i) => {
        const btn = document.createElement('button');
        btn.className = 'thumb' + (i === 0 ? ' active' : '');
        btn.addEventListener('click', () => { currentIndex = i; updateDialog(); });
        const img = document.createElement('img');
        img.src = `./assets/img/start/${file}`;
        img.alt = file;
        btn.appendChild(img);
        container.appendChild(btn);
    });
}
