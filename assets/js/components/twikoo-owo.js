document.addEventListener('DOMContentLoaded', function() {
    let activePanel = null;

    // 监听表情按钮点击
    document.addEventListener('click', function(e) {
        const owoTrigger = e.target.closest('.OwO-logo');
        if (owoTrigger) {
            e.preventDefault();
            e.stopPropagation();
            
            const panel = owoTrigger.closest('.OwO').querySelector('.OwO-body');
            
            // 如果已经有打开的面板，先关闭它
            if (activePanel && activePanel !== panel) {
                closePanel(activePanel);
            }
            
            // 切换当前面板
            if (panel.classList.contains('active')) {
                closePanel(panel);
            } else {
                openPanel(panel);
            }
        } else if (!e.target.closest('.OwO-body')) {
            // 点击面板外部时关闭
            if (activePanel) {
                closePanel(activePanel);
            }
        }
    });

    // 监听ESC键
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && activePanel) {
            closePanel(activePanel);
        }
    });

    function openPanel(panel) {
        panel.classList.add('active');
        document.body.classList.add('owo-active');
        activePanel = panel;
    }

    function closePanel(panel) {
        panel.classList.remove('active');
        document.body.classList.remove('owo-active');
        activePanel = null;
    }
}); 