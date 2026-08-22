// ── HERO ─────────────────────────────────────────────────────
export function getHeroTemplate() {
    return `
        <h1>OPEL MANTA</h1>
        <p id="ikone"><strong>IKONE DER 70ER &amp; 80ER</strong></p>
        <p id="ikoneText">
            Kraftvoll. Markant. Kultig <br />
            Der Opel Manta begeistert seit <br />
            über 50 Jahre Generationen
        </p>
        <button class="goToGalery">Galerie Ansehen</button>
    `;
}

// ── GALERIE NAV ───────────────────────────────────────────────
export function getGalerieNavTemplate() {
    return `
        <section class="mainNav" id="galerie">
            <h2>GALERIE</h2>
            <section class="mainNav_listBtn">
                <button>Alle</button>
                <button>Manta Mattig</button>
                <button>Manta B</button>
            </section>
        </section>
    `;
}

// ── GESCHICHTE ────────────────────────────────────────────────
export function getGeschichteTemplate() {
    return `
        <section class="geschichte" id="geschichte">
            <h2>GESCHICHTE</h2>
            <div class="geschichte-tabs" id="geschichteTabs">
                <button class="geschichte-tab active" data-history="mattig">Manta-Mattig</button>
                <button class="geschichte-tab" data-history="mantaB">Manta B</button>
            </div>
            <article class="geschichte-article" id="geschichteArticle"></article>
        </section>
    `;
}

export function getHistoryArticleTemplate(entry) {
    const intro = entry.intro ? `<p>${entry.intro}</p>` : '';
    const paragraphs = (entry.paragraphs || []).map((p) => `<p>${p}</p>`).join('');
    const sections = (entry.sections || []).map(getHistorySectionTemplate).join('');

    return `
        <h3>${entry.title}</h3>
        ${intro}
        ${paragraphs}
        ${sections}
    `;
}

function getHistorySectionTemplate(section) {
    const paragraphs = section.paragraphs.map((p) => `<p>${p}</p>`).join('');
    const list = section.list
        ? `<ul>${section.list.map((item) => `<li>${item}</li>`).join('')}</ul>`
        : '';

    return `
        <h4>${section.heading}</h4>
        ${paragraphs}
        ${list}
    `;
}

// ── FOLDER GRID (Rahmen um alle Ordner-Karten) ─────────────────
export function getFolderGridWrapperTemplate() {
    return `
        <section class="folder-stage">
            <p class="folder-hint">Fahre über einen Ordner – klicke zum Öffnen der Galerie</p>
            <div class="folder-grid" id="folder-grid"></div>
        </section>
    `;
}

// ── EINZELNE FOLDER-CARD ────────────────────────────────────────
export function getFolderCardTemplate(folder) {
    const previewIndex = Math.min(3, folder.count);

    return `
        <div class="folder-item">
            <div class="folder-card" data-folder="${folder.key}">
                <section class="folder-container">
                    <section class="folder-back"></section>
                    <section class="file file-5">
                        <img class="file-preview" src="${folder.getPath(previewIndex)}" alt="${folder.title}">
                        <div class="shine"></div>
                        <div class="file-text">${folder.title}</div>
                        <div class="file-tag">JPEG</div>
                    </section>
                    <section class="folder-label"></section>
                </section>
            </div>
            <p class="folder-name">${folder.title}</p>
            <button class="open-gallery-btn">Galerie öffnen</button>
        </div>
    `;
}

// ── DIALOG ────────────────────────────────────────────────────
export function getDialogTemplate() {
    return `
        <dialog id="galleryDialog" class="gallery-dialog">
            <div class="dialog-inner">
                <button class="dialog-close">&#10005;</button>
                <div class="dialog-img-wrap">
                    <img id="dialogImg" src="" alt="Manta">
                </div>
                <div class="dialog-controls">
                    <button class="nav-btn prev"><img src="./assets/icons/Arrow-Thick-Left.png" alt="Vorheriges Bild" /></button>
                    <div class="dialog-meta">
                        <span id="dialogCounter"></span>
                        <span id="dialogName"></span>
                    </div>
                    <button class="nav-btn next"><img src="./assets/icons/Arrow-Thick-Right.png" alt="Nächstes Bild" /></button>
                </div>
                <div class="dialog-thumbs" id="dialogThumbs"></div>
            </div>
        </dialog>
    `;
}
