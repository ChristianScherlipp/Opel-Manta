import { FolderCard } from './classes/folder-card.class.js';
import { GalleryDialog } from './classes/gallery-dialog.class.js';
import {
    getHeroTemplate,
    getGalerieNavTemplate,
    getFolderGridWrapperTemplate,
    getDialogTemplate,
} from './templates.js';

// ── ORDNER-KONFIGURATION ────────────────────────────────────────
// Nur Ordnername, Titel und Bilderanzahl - die Pfade selbst
// werden von MediaFolder direkt aus diesen Angaben gebaut.
const FOLDERS = [
    { key: 'start', title: 'Start', count: 24 },
    { key: 'der_anfang_ist_getan', title: 'Der Anfang ist getan', count: 57 },
    { key: 'der_ausbau', title: 'Der Ausbau', count: 37 },
    { key: 'die_feinheiten', title: 'Die Feinheiten', count: 14 },
    { key: 'fertigstellung_und_resultat', title: 'Fertigstellung und Resultat', count: 39 },
];

let dialog;

function init() {
    renderHero();
    renderGalerieNav();
    renderFolders();
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

// ── FOLDER GRID ───────────────────────────────────────────────
function renderFolders() {
    document.getElementById('folder-root').innerHTML = getFolderGridWrapperTemplate();
    const grid = document.getElementById('folder-grid');

    FOLDERS.forEach((config) => grid.appendChild(createFolderCard(config)));
}

function createFolderCard(config) {
    const card = new FolderCard(config, (folder) => dialog.open(folder));
    return card.render();
}

// ── DIALOG ────────────────────────────────────────────────────
function renderDialog() {
    document.getElementById('dialog-root').innerHTML = getDialogTemplate();
    dialog = new GalleryDialog();
}

init();