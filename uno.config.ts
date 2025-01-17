import { defineConfig, presetUno, presetIcons } from 'unocss'
import { IconifyJSON } from '@iconify/types'

import carbonIcons from '@iconify-json/carbon/icons.json'
import mdiIcons from '@iconify-json/mdi/icons.json'

export default defineConfig({
    presets: [
        presetUno({
            dark: 'class',
        }),
        presetIcons({
            scale: 1.2,
            collections: {
                carbon: () => carbonIcons as IconifyJSON,
                mdi: () => mdiIcons as IconifyJSON,
            }
        }),
    ],
    theme: {
        colors: {
            border: 'var(--border)',
            background: 'var(--background)',
            foreground: 'var(--foreground)',
            primary: {
                DEFAULT: 'var(--primary)',
                foreground: 'var(--primary-foreground)',
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            muted: {
                DEFAULT: 'var(--muted)',
                foreground: 'var(--muted-foreground)',
            },
            accent: {
                DEFAULT: 'var(--accent)',
                foreground: 'var(--accent-foreground)',
            },
        },
    },
    safelist: [
        // Alert 基础布局
        'my-6', 'rounded-lg', 'border-l-4', 'p-4', 'mb-2', 'flex', 'items-center', 'gap-2', 'font-medium', 'w-5', 'h-5',
        
        // Alert 图标
        'i-carbon-information', 'i-carbon-idea', 'i-carbon-star', 'i-carbon-warning', 'i-carbon-warning-alt',
        
        // Alert 边框颜色
        'border-blue-500', 'border-green-500', 'border-purple-500', 'border-amber-500', 'border-red-500',
        
        // Alert 背景颜色
        'bg-blue-50/30', 'bg-green-50/30', 'bg-purple-50/30', 'bg-amber-50/30', 'bg-red-50/30',
        'dark:bg-blue-500/10', 'dark:bg-green-500/10', 'dark:bg-purple-500/10', 'dark:bg-amber-500/10', 'dark:bg-red-500/10',
        
        // Alert 文本颜色
        'text-blue-700', 'text-green-700', 'text-purple-700', 'text-amber-700', 'text-red-700',
        'dark:text-blue-300', 'dark:text-green-300', 'dark:text-purple-300', 'dark:text-amber-300', 'dark:text-red-300',
        
        // Alert 文本透明度
        'text-foreground/80', 'dark:text-foreground-dark/80',
        
        // 引用块样式
        'border-border/60', 'dark:border-border-dark/60',
        'pl-4', 'bg-card/20', 'dark:bg-card-dark/20'
    ]
})