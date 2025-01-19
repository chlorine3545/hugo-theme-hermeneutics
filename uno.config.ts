import { defineConfig, presetUno, presetIcons } from 'unocss'
import { IconifyJSON } from '@iconify/types'

import carbonIcons from '@iconify-json/carbon/icons.json'
import mdiIcons from '@iconify-json/mdi/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'

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
                simple: () => simpleIcons as IconifyJSON,
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
    }
})