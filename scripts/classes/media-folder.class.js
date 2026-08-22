// ── MEDIA FOLDER ─────────────────────────────────────────────
// Basisklasse: kennt nur die Daten eines Bilderordners und baut
// die Bildpfade direkt aus Ordnername + Nummer (kein Datei-Array
// mehr nötig, da alle Bilder fortlaufend 1..count benannt sind).
export class MediaFolder {
    constructor({ key, title, count, extension = 'jpeg', basePath = './assets/img' }) {
        this.key = key;
        this.title = title;
        this.count = count;
        this.extension = extension;
        this.basePath = basePath;
    }

    getPath(index) {
        return `${this.basePath}/${this.key}/${index}.${this.extension}`;
    }

    getFileName(index) {
        return `${index}.${this.extension}`;
    }
}