class Lightbox {
    constructor() {
        if (document.querySelector('.lightbox__overlay')) return; // 防止重复初始化
        this.createLightbox();
        this.initializeImages();
    }

    createLightbox() {
        this.overlay = document.createElement('div');
        this.overlay.className = 'lightbox__overlay';
        this.image = document.createElement('img');
        this.image.className = 'lightbox__image';
        this.closeButton = document.createElement('div');
        this.closeButton.className = 'lightbox__close';
        this.closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        this.overlay.append(this.image, this.closeButton);
        document.body.appendChild(this.overlay);

        this.overlay.addEventListener('click', e => {
            if (e.target === this.overlay) this.close();
        });
        this.closeButton.addEventListener('click', () => this.close());
    }

    initializeImages() {
        document.querySelectorAll('.prose img:not(.no-lightbox)').forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => this.open(img));
        });
    }

    open(img) {
        this.image.src = img.dataset.src || img.src;
        this.image.alt = img.alt || '';
        this.image.title = img.title || '';
        this.overlay.style.display = 'flex';
        this.overlay.offsetHeight;
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        this._keydownHandler = e => { if (e.key === 'Escape') this.close(); };
        document.addEventListener('keydown', this._keydownHandler);
    }

    close() {
        this.overlay.classList.remove('active');
        setTimeout(() => {
            this.overlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
        document.removeEventListener('keydown', this._keydownHandler);
    }
}

document.addEventListener('DOMContentLoaded', () => new Lightbox());