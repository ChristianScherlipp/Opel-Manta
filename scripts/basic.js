function init() {
    renderHero();
    renderGalerieNav();
    renderFolder();
    renderDialog();
}

// ── HERO ─────────────────────────────────────────────────────
function renderHero() {
    document.getElementById('hero-content').innerHTML = getHeroTemplate();

    document.querySelector('.goToGalery').addEventListener('click', () => {
        document.getElementById('galerie').scrollIntoView({ behavior: 'smooth' });
    });
}

// ── GALERIE NAV ───────────────────────────────────────────────
function renderGalerieNav() {
    document.getElementById('galerie-nav').innerHTML = getGalerieNavTemplate();
}

// ── FOLDER ────────────────────────────────────────────────────
function renderFolder() {
    const previews = [theStart[0], theStart[1], theStart[2]];
    document.getElementById('folder-root').innerHTML = getFolderTemplate(previews);

    document.querySelector('.open-gallery-btn').addEventListener('click', () => openGallery());
}

// ── DIALOG ────────────────────────────────────────────────────
function renderDialog() {
    document.getElementById('dialog-root').innerHTML = getDialogTemplate();

    const dlg = document.getElementById('galleryDialog');

    document.querySelector('.dialog-close').addEventListener('click', () => closeGallery());
    document.querySelector('.nav-btn.prev').addEventListener('click', () => changeImage(-1));
    document.querySelector('.nav-btn.next').addEventListener('click', () => changeImage(1));

    dlg.addEventListener('click', (e) => { if (e.target === dlg) closeGallery(); });

    document.addEventListener('keydown', (e) => {
        if (!dlg.open) return;
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'ArrowLeft')  changeImage(-1);
        if (e.key === 'Escape')     closeGallery();
    });
}
