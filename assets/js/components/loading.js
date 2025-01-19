document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');

    // 页面加载完成后，淡出加载动画
    window.addEventListener('load', function () {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });

    // 页面跳转时，显示加载动画
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (link && !link.target && link.hostname === window.location.hostname) {
            loadingScreen.style.display = 'flex';
            loadingScreen.style.opacity = '1';
        }
    });
});