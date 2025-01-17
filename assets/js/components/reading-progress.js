document.addEventListener('DOMContentLoaded', function () {
    const article = document.querySelector('article');
    const progress = document.getElementById('reading-progress');
    const percent = document.getElementById('percent');

    function updateReadingProgress() {
        if (!article || !progress || !percent) return;

        // 获取文章容器的位置信息
        const rect = article.getBoundingClientRect();
        const articleTop = rect.top;
        const articleHeight = rect.height;
        
        // 计算可视区域高度
        const viewportHeight = window.innerHeight;
        
        // 计算已滚动的距离（相对于文章顶部）
        const scrolled = -articleTop;
        
        // 计算总可滚动距离（文章高度减去视口高度）
        const scrollable = articleHeight - viewportHeight;
        
        // 计算阅读进度百分比
        let percentage = Math.min(100, Math.max(0, 
            Math.round((scrolled / scrollable) * 100)
        ));
        
        // 如果文章底部已经进入视口，则根据底部可见比例调整百分比
        if (rect.bottom <= viewportHeight) {
            percentage = 100;
        }

        // 更新进度条和百分比显示
        progress.style.width = `${percentage}%`;
        percent.textContent = percentage;
    }

    // 监听滚动和窗口大小改变事件
    window.addEventListener('scroll', updateReadingProgress);
    window.addEventListener('resize', updateReadingProgress);
    
    // 初始化进度
    updateReadingProgress();
});