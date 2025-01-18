document.addEventListener('DOMContentLoaded', function () {
    const progressBall = document.getElementById('reading-progress-ball');
    const article = document.querySelector('article');

    function updateReadingProgress() {
        const rect = article.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const articleHeight = article.offsetHeight;

        // 计算阅读进度百分比
        let progress = (windowHeight - rect.top) / (articleHeight - windowHeight) * 100;
        progress = Math.min(100, Math.max(0, progress));

        // 更新移动端进度球
        if (progressBall) {
            progressBall.textContent = `${Math.round(progress)}%`;

            // 控制进度球的显示/隐藏
            if (progress > 0 && progress < 100) {
                progressBall.classList.remove('translate-y-24', 'opacity-0');
            } else {
                progressBall.classList.add('translate-y-24', 'opacity-0');
            }
        }
    }

    window.addEventListener('scroll', updateReadingProgress);
    updateReadingProgress();
});