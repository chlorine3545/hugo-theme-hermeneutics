let isAnnouncementVisible = false;
const announcement = () => document.getElementById('announcement');

const showAnnouncement = () => {
    const el = announcement();
    if (el) {
        el.classList.remove('translate-x-[120%]', 'opacity-0');
        isAnnouncementVisible = true;
    }
};

window.closeAnnouncement = () => {
    const el = announcement();
    if (el) {
        el.classList.add('translate-x-[120%]', 'opacity-0');
        isAnnouncementVisible = false;
    }
};

const toggleAnnouncement = () => (
    isAnnouncementVisible ? window.closeAnnouncement() : showAnnouncement()
);

document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        toggleAnnouncement();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showAnnouncement, 2025);
});