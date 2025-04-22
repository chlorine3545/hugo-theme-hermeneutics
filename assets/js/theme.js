let currentTheme = null;

function getTheme() {
    if (currentTheme) {
        return currentTheme;
    }
    // 首次加载时从 localStorage 获取
    const savedTheme = localStorage.getItem('theme');
    currentTheme = savedTheme || 'light';
    return currentTheme;
}

function setTheme(theme) {
    const htmlElement = document.documentElement;
    // 先移除所有可能的主题类
    htmlElement.classList.remove('light', 'dark');

    if (theme === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.add('light');
    }

    currentTheme = theme;
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const iconClass = theme === 'dark' ? 'i-carbon-moon' : 'i-carbon-sun';
    themeToggle.innerHTML = `<div class="${iconClass} w-4 h-4 text-muted-foreground/70 dark:text-muted-foreground-dark/70"></div>`;
}

document.addEventListener('DOMContentLoaded', function () {
    const theme = getTheme();
    setTheme(theme);
});

document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu');
    const navTitle = document.getElementById('nav-title');
    let lastScrollY = window.scrollY;
    const scrollThreshold = 100; // 滚动阈值

    function updateNav() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollThreshold) {
            navMenu.style.opacity = '0';
            navMenu.style.pointerEvents = 'none';
            navTitle.style.opacity = '1';
            navTitle.style.pointerEvents = 'auto';
        } else {
            navMenu.style.opacity = '1';
            navMenu.style.pointerEvents = 'auto';
            navTitle.style.opacity = '0';
            navTitle.style.pointerEvents = 'none';
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', updateNav);
    updateNav();
});