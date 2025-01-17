function updateTocHighlight() {
    const headings = document.querySelectorAll('article h2, article h3');
    const tocLinks = document.querySelectorAll('.toc a');
    
    // 找到当前可见的标题
    let currentHeading = null;
    let minDistance = Infinity;

    for (const heading of headings) {
        const rect = heading.getBoundingClientRect();
        // 计算标题到视口顶部的距离（考虑导航栏高度）
        const distance = Math.abs(rect.top - 80);
        
        // 找到最接近的标题
        if (distance < minDistance) {
            minDistance = distance;
            currentHeading = heading;
        }
    }
    
    // 更新目录高亮
    tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        // 移除活跃状态
        link.classList.remove('active');
        
        // 添加活跃状态
        if (currentHeading && link.getAttribute('href') === '#' + currentHeading.id) {
            link.classList.add('active');
            
            // 确保活跃的链接在视口中可见
            const tocContainer = document.querySelector('.toc');
            if (tocContainer) {
                const linkRect = link.getBoundingClientRect();
                const containerRect = tocContainer.getBoundingClientRect();
                
                if (linkRect.bottom > containerRect.bottom || linkRect.top < containerRect.top) {
                    link.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 使用节流函数来优化滚动事件
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateTocHighlight();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // 初始化目录高亮
    updateTocHighlight();
    
    // 点击目录链接时平滑滚动
    document.querySelectorAll('.toc a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}); 