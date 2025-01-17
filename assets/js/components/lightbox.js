class Lightbox {
    constructor() {
        this.createLightbox();
        this.initializeImages();
    }

    createLightbox() {
        // 创建灯箱元素
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        
        const image = document.createElement('img');
        image.className = 'lightbox-image';
        
        const closeButton = document.createElement('div');
        closeButton.className = 'lightbox-close';
        closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        
        overlay.appendChild(image);
        overlay.appendChild(closeButton);
        document.body.appendChild(overlay);
        
        this.overlay = overlay;
        this.image = image;
        
        // 绑定事件
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.close();
            }
        });
        
        closeButton.addEventListener('click', () => this.close());
        
        // 键盘事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
    }

    initializeImages() {
        // 为文章内的所有图片添加点击事件
        const articleImages = document.querySelectorAll('.prose img:not(.no-lightbox)');
        articleImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => this.open(img.src));
        });
    }

    open(src) {
        this.image.src = src;
        this.overlay.style.display = 'flex';
        // 强制重绘
        this.overlay.offsetHeight;
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.overlay.classList.remove('active');
        setTimeout(() => {
            this.overlay.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
}

// 页面加载完成后初始化灯箱
document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
}); 