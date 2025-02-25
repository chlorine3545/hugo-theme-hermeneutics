document.addEventListener('DOMContentLoaded', function () {
    const progressBall = document.getElementById('reading-progress-ball');
    if (!progressBall) return;

    const article = document.querySelector('article');
    if (!article) return;

    function updateReadingProgress() {
        // 获取实时位置和尺寸信息
        const rect = article.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 计算关键指标
        const scrollTop = -rect.top;  // 已滚动距离（负值转正值）
        const totalHeight = rect.height;  // 文章总高度
        const viewableHeight = Math.min(windowHeight, totalHeight);  // 可视区域高度
        const scrollableHeight = totalHeight - viewableHeight;  // 可滚动总距离

        // 计算进度百分比
        let progress = (scrollTop / scrollableHeight) * 100;
        progress = Math.min(100, Math.max(0, progress));
        const roundedProgress = Math.round(progress);

        // 更新进度球文本
        progressBall.textContent = `${roundedProgress}%`;

        // 控制进度球显示状态
        const shouldShow = progress > 0 && progress < 100 && scrollableHeight > 0;
        progressBall.classList.toggle('translate-y-24', !shouldShow);
        progressBall.classList.toggle('opacity-0', !shouldShow);
    }

    // 节流函数优化
    function throttle(func, delay) {
        let timeoutId;
        let lastExecTime = 0;

        return function (...args) {
            const now = Date.now();
            const context = this;

            if (now - lastExecTime >= delay) {
                // 时间间隔足够，直接执行
                func.apply(context, args);
                lastExecTime = now;
            } else {
                // 重置定时器，确保最后一次操作也能执行
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(context, args);
                    lastExecTime = Date.now();
                }, delay);
            }
        };
    }

    // 监听滚动事件，使用 passive 提升性能
    window.addEventListener('scroll', throttle(updateReadingProgress, 100), { passive: true });

    // 监听窗口大小变化
    window.addEventListener('resize', throttle(updateReadingProgress, 100), { passive: true });

    // 初始化进度显示
    updateReadingProgress();
});