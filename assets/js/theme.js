function getTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    const htmlElement = document.documentElement;
    // 先移除所有可能的主题类
    htmlElement.classList.remove('light', 'dark');

    if (theme === 'dark') {
        htmlElement.classList.add('dark');
    } else if (theme === 'light') {
        htmlElement.classList.add('light');
    } else {
        // 自动模式
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.add('light');
        }
    }
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    const iconClass = theme === 'dark' ? 'i-carbon-moon' :
        theme === 'light' ? 'i-carbon-sun' :
            'i-carbon-screen';
    themeToggle.innerHTML = `<div class="${iconClass} w-4 h-4 text-muted-foreground/70 dark:text-muted-foreground-dark/70"></div>`;
}

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const theme = getTheme();
    setTheme(theme);

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('theme') === 'auto') {
            setTheme('auto');
        }
    });
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

console.log("theme.js loaded");