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

        // 处理文章底部进入视口的情况
        if (rect.bottom <= viewportHeight) {
            percentage = 100;
        }

        // 更新进度条和百分比显示
        progress.style.width = `${percentage}%`;
        percent.textContent = percentage;
    }

    // 使用节流函数优化滚动事件处理
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;

        return function (...args) {
            const now = Date.now();
            const context = this;

            if (now - lastExecTime >= delay) {
                func.apply(context, args);
                lastExecTime = now;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(context, args);
                    lastExecTime = Date.now();
                }, delay);
            }
        };
    }

    // 添加节流和 passive 选项
    window.addEventListener('scroll', throttle(updateReadingProgress, 100), { passive: true });
    window.addEventListener('resize', throttle(updateReadingProgress, 100), { passive: true });

    // 初始化进度
    updateReadingProgress();
});