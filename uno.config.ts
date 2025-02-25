import { defineConfig, presetWind3, presetIcons } from 'unocss';

const rawCSS = `
:root, :host {
    --bg-ripple: oklch(0.928 0.006 264.531 / .8)
}
`
export default defineConfig({
    preflights: [{ getCSS: () => rawCSS }],
    presets: [presetIcons({
        cdn: 'https://esm.sh/',
        extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'bottom',
            'font-size': '130%'
        }
    }),
    presetWind3({ dark: 'media' })]
})