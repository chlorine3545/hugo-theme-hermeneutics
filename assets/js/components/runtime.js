(function () { // 使用 IIFE
    function formatNumber(n) {
        return n < 10 ? '0' + n : n;
    }

    function runtime() {
        const runningTimeElement = document.getElementById("runningtime");
        if (!runningTimeElement) return;

        const startDateString = runningTimeElement.dataset.startDate;
        if (!startDateString) return;

        const startTime = new Date(startDateString);
        const currentTime = new Date();
        const timeDifference = currentTime - startTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        const timeString = `${days} 天 ${formatNumber(hours)} : ${formatNumber(minutes)} : ${formatNumber(seconds)}`;
        runningTimeElement.textContent = timeString; // 使用 textContent
    }

    document.addEventListener('DOMContentLoaded', () => {
        runtime();
        setInterval(runtime, 1000);
    });
})();