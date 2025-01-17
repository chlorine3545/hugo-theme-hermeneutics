document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre').forEach(block => {
        // 创建复制按钮
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.innerHTML = `
            <div class="i-carbon-copy w-3.5 h-3.5"></div>
            <span>复制代码</span>
        `;

        // 添加点击事件
        button.addEventListener('click', async () => {
            const code = block.querySelector('code')?.innerText || block.innerText;

            try {
                await navigator.clipboard.writeText(code.trim());

                // 更新按钮状态
                button.classList.add('copied');
                button.innerHTML = `
                    <div class="i-carbon-checkmark w-3.5 h-3.5"></div>
                    <span>已复制</span>
                `;

                // 2秒后恢复
                setTimeout(() => {
                    button.classList.remove('copied');
                    button.innerHTML = `
                        <div class="i-carbon-copy w-3.5 h-3.5"></div>
                        <span>复制代码</span>
                    `;
                }, 2000);

            } catch (err) {
                console.error('复制失败:', err);
                button.innerHTML = `
                    <div class="i-carbon-error w-3.5 h-3.5"></div>
                    <span>复制失败</span>
                `;
            }
        });

        // 添加按钮到代码块
        block.appendChild(button);
    });
}); 