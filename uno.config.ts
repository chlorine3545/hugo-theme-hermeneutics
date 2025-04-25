import { defineConfig, presetWind3, transformerVariantGroup } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetWind3({
            dark: 'class',
        }),
        presetIcons(),
    ],
    theme: {
        colors: {
            border: 'var(--herm-border)',
            background: 'var(--herm-background)',
            foreground: 'var(--herm-foreground)',
            primary: {
                DEFAULT: 'var(--herm-primary)',
                foreground: 'var(--herm-primary-foreground)',
            },
            muted: {
                DEFAULT: 'var(--herm-muted)',
                foreground: 'var(--herm-muted-foreground)',
            }
        },
    },
    transformers: [
        transformerVariantGroup(),
    ],
})