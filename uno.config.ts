import { defineConfig, presetWind3, presetIcons, transformerDirectives } from 'unocss';

const rawCSS = `
:root, :host {
    --bg-ripple: oklch(0.928 0.006 264.531 / .8)
}
`
export default defineConfig({
    preflights: [{ getCSS: () => rawCSS }],
    transformers: [transformerDirectives()],
    presets: [
        presetIcons({
            cdn: 'https://esm.sh/',
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'bottom',
                'font-size': '130%'
            }
        }),
        presetWind3({ dark: 'media' })
    ]
})