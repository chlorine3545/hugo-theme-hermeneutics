document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');

    // 页面加载完成时隐藏
    window.addEventListener('load', function () {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    });

    // 页面跳转时显示
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (link &&
            link.href &&
            !link.href.startsWith('#') &&
            !link.href.includes('#') &&
            link.href !== window.location.href &&
            !link.hasAttribute('download') &&
            link.target !== '_blank' &&
            link.hostname === window.location.hostname) {

            e.preventDefault(); // 阻止默认跳转
            loadingScreen.style.display = 'flex';
            loadingScreen.style.opacity = '1';

            // 延迟跳转
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        }
    });
});