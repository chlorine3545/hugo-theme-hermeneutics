let isAnnouncementVisible = false;

function showAnnouncement() {
    const announcement = document.getElementById('announcement');
    if (announcement) {
        announcement.classList.remove('translate-x-[120%]');
        announcement.classList.remove('opacity-0');
        isAnnouncementVisible = true;
    }
}

function closeAnnouncement() {
    const announcement = document.getElementById('announcement');
    if (announcement) {
        announcement.classList.add('translate-x-[120%]');
        announcement.classList.add('opacity-0');
        isAnnouncementVisible = false;
    }
}

function toggleAnnouncement() {
    if (isAnnouncementVisible) {
        closeAnnouncement();
    } else {
        showAnnouncement();
    }
}

// 监听键盘事件 - 使用 Ctrl/Cmd + / 切换公告显示
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        toggleAnnouncement();
    }
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    // 延迟2秒后自动显示一次
    setTimeout(showAnnouncement, 2000);
});