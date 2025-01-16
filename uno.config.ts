import { defineConfig, presetUno, presetIcons } from 'unocss'
import { IconifyJSON } from '@iconify/types';

import carbonIcons from '@iconify-json/carbon/icons.json';
import mdiIcons from '@iconify-json/mdi/icons.json';

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
            collections: {
                carbon: () => carbonIcons as IconifyJSON, // 确保类型匹配
                mdi: () => mdiIcons as IconifyJSON,
            }

        }),
    ],
    theme: {
        colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))',
            },
        },
    },
})