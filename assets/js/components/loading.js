document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    let loadingTimeout;

    function hideLoading() {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 400);
        }
        if (loadingTimeout) {
            clearTimeout(loadingTimeout);
            loadingTimeout = null;
        }
    }

    function showLoading() {
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
            // 强制重排以确保过渡动画生效
            loadingScreen.offsetHeight;
            loadingScreen.style.opacity = '1';
            
            // 设置超时保护，最多显示3秒
            loadingTimeout = setTimeout(hideLoading, 3000);
        }
    }

    // 页面加载完成时隐藏
    window.addEventListener('load', hideLoading);

    // 处理浏览器返回按钮
    window.addEventListener('pageshow', function(event) {
        // 如果是从缓存加载的页面，也需要隐藏加载动画
        if (event.persisted) {
            hideLoading();
        }
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
            showLoading();

            // 延迟跳转
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        }
    });

    // 初始隐藏加载动画（以防万一）
    hideLoading();
});