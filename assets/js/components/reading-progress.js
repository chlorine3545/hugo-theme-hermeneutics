document.addEventListener('DOMContentLoaded', function () {
    const article = document.querySelector('article');
    const progress = document.getElementById('reading-progress');
    const percent = document.getElementById('percent');
    const tocLinks = document.querySelectorAll('#TableOfContents a');
    const headings = article.querySelectorAll('h2, h3, h4, h5, h6');
    let activeId = '';

    function updateReadingProgress() {
        const totalHeight = article.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollableDistance = totalHeight - viewportHeight;
        const currentScroll = Math.max(0, window.scrollY - article.offsetTop);
        const percentage = Math.min(100, Math.max(0, Math.round((currentScroll / scrollableDistance) * 100)));

        progress.style.width = `${percentage}%`;
        percent.textContent = percentage;
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateToc() {
        const fromTop = window.scrollY + 100;
        let currentId = '';

        // 优先查找可见的标题
        for (let i = headings.length - 1; i >= 0; i--) {
            if (headings[i].offsetTop <= fromTop && isElementInViewport(headings[i])) {
                currentId = headings[i].id;
                break;
            }
        }

        // 如果没有找到可见的标题，则使用之前的方法
        if (!currentId) {
            headings.forEach(heading => {
                if (heading.offsetTop <= fromTop) {
                    currentId = heading.id;
                }
            });
        }

        if (currentId !== activeId) {
            tocLinks.forEach(link => link.classList.remove('active'));

            if (currentId) {
                const activeLink = document.querySelector(`#TableOfContents a[href="#${currentId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }

            activeId = currentId;
        }
    }

    window.addEventListener('load', updateReadingProgress);
    window.addEventListener('scroll', updateReadingProgress);
    window.addEventListener('resize', updateReadingProgress);
    window.addEventListener('scroll', updateToc);
    updateReadingProgress();
    updateToc();
});