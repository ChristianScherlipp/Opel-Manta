import { MediaFolder } from './media-folder.class.js';
import { getFolderCardTemplate } from '../templates.js';

// ── FOLDER CARD ──────────────────────────────────────────────
// Erbt von MediaFolder (Daten + Bildpfade) und ergänzt die
// DOM-Darstellung der klick-/hoverbaren Ordner-Karte.
export class FolderCard extends MediaFolder {
    constructor(config, onOpen) {
        super(config);
        this.onOpen = onOpen;
        this.element = null;
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = getFolderCardTemplate(this).trim();
        this.element = template.content.firstElementChild;
        this.bindEvents();
        return this.element;
    }

    bindEvents() {
        const openBtn = this.element.querySelector('.open-gallery-btn');
        const card = this.element.querySelector('.folder-card');

        openBtn.addEventListener('click', () => this.onOpen(this));
        card.addEventListener('click', () => this.onOpen(this));
    }
}