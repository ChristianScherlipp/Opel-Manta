// ── GALLERY DIALOG ───────────────────────────────────────────
// Steuert die Lightbox: bekommt beim Öffnen einen MediaFolder
// (bzw. FolderCard, da davon erbt) übergeben und zeigt dessen
// Bilder an. Bild-Bereich hat eine feste Höhe, die Buttons
// stehen fest darunter (verschieben sich nicht mit dem Bild).
export class GalleryDialog {
    constructor() {
        this.dialogEl = document.getElementById('galleryDialog');
        this.imgEl = document.getElementById('dialogImg');
        this.counterEl = document.getElementById('dialogCounter');
        this.nameEl = document.getElementById('dialogName');
        this.thumbsEl = document.getElementById('dialogThumbs');
        this.folder = null;
        this.index = 1;
        this.bindEvents();
    }

    open(folder, startIndex = 1) {
        this.folder = folder;
        this.index = startIndex;
        this.buildThumbs();
        this.update();
        this.dialogEl.showModal();
    }

    close() {
        this.dialogEl.close();
    }

    change(direction) {
        const count = this.folder.count;
        this.index = ((this.index - 1 + direction + count) % count) + 1;
        this.update();
    }

    update() {
        this.imgEl.src = this.folder.getPath(this.index);
        this.imgEl.alt = `${this.folder.title} ${this.index}`;
        this.counterEl.textContent = `${this.index} / ${this.folder.count}`;
        this.nameEl.textContent = this.folder.title;
        this.updateActiveThumb();
    }

    updateActiveThumb() {
        const thumbs = this.thumbsEl.querySelectorAll('.thumb');
        thumbs.forEach((t, i) => t.classList.toggle('active', i === this.index - 1));

        const active = this.thumbsEl.querySelector('.thumb.active');
        if (active) active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }

    buildThumbs() {
        this.thumbsEl.innerHTML = '';
        for (let i = 1; i <= this.folder.count; i++) {
            this.thumbsEl.appendChild(this.createThumb(i));
        }
    }

    createThumb(index) {
        const btn = document.createElement('button');
        btn.className = 'thumb' + (index === 1 ? ' active' : '');
        btn.addEventListener('click', () => { this.index = index; this.update(); });

        const img = document.createElement('img');
        img.src = this.folder.getPath(index);
        img.alt = `${this.folder.title} ${index}`;

        btn.appendChild(img);
        return btn;
    }

    bindEvents() {
        document.querySelector('.dialog-close').addEventListener('click', () => this.close());
        document.querySelector('.nav-btn.prev').addEventListener('click', () => this.change(-1));
        document.querySelector('.nav-btn.next').addEventListener('click', () => this.change(1));

        this.dialogEl.addEventListener('click', (e) => { if (e.target === this.dialogEl) this.close(); });
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    handleKeydown(e) {
        if (!this.dialogEl.open) return;
        if (e.key === 'ArrowRight') this.change(1);
        if (e.key === 'ArrowLeft') this.change(-1);
        if (e.key === 'Escape') this.close();
    }
}