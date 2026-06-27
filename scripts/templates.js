// ── HERO ─────────────────────────────────────────────────────
function getHeroTemplate() {
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
function getGalerieNavTemplate() {
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

// ── FOLDER ────────────────────────────────────────────────────
function getFolderTemplate(previewImages) {
    return `
        <section class="folder-stage">
            <p class="folder-hint">Fahre über den Ordner – klicke zum Öffnen der Galerie</p>
            <div class="folder-card">
                <section class="folder-container">
                    <section class="folder-back"></section>
                    <section class="file file-5">
                        <img class="file-preview" src="./assets/img/start/${previewImages[2]}" alt="Manta">
                        <div class="shine"></div>
                        <div class="file-text">${previewImages[2]}</div>
                        <div class="file-tag">JPEG</div>
                    </section>
                    <section class="file file-4">
                        <img class="file-preview" src="./assets/img/start/${previewImages[1]}" alt="Manta">
                        <div class="shine"></div>
                        <div class="file-text">${previewImages[1]}</div>
                        <div class="file-tag">JPEG</div>
                    </section>
                    <section class="file file-3">
                        <img class="file-preview" src="./assets/img/start/${previewImages[0]}" alt="Manta">
                        <div class="shine"></div>
                        <div class="file-text">${previewImages[0]}</div>
                        <div class="file-tag">JPEG</div>
                    </section>
                    <section class="file file-2">
                        <div class="shine"></div>
                        <div class="file-text">manta_04.jpeg</div>
                        <div class="file-tag">JPEG</div>
                    </section>
                    <section class="file file-1">
                        <div class="shine"></div>
                        <div class="file-text">manta_05.jpeg</div>
                        <div class="file-tag">JPEG</div>
                    </section>
                    <section class="folder-front-wrapper">
                        <div class="folder-front">
                            <span class="folder-title">Manta Galerie</span>
                        </div>
                    </section>
                    <section class="folder-label"></section>
                </section>
            </div>
            <button class="open-gallery-btn">Galerie öffnen</button>
        </section>
    `;
}

// ── DIALOG ────────────────────────────────────────────────────
function getDialogTemplate() {
    return `
        <dialog id="galleryDialog" class="gallery-dialog">
            <div class="dialog-inner">
                <button class="dialog-close">&#10005;</button>
                <div class="dialog-img-wrap">
                    <button class="nav-btn prev">&#8592;</button>
                    <img id="dialogImg" src="" alt="Manta">
                    <button class="nav-btn next">&#8594;</button>
                </div>
                <div class="dialog-meta">
                    <span id="dialogCounter"></span>
                    <span id="dialogName"></span>
                </div>
                <div class="dialog-thumbs" id="dialogThumbs"></div>
            </div>
        </dialog>
    `;
}
