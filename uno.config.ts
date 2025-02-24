import { defineConfig, presetWind3, presetIcons } from 'unocss';
import tailwindPreflight from "./lib/tailwind-preflight.ts";
import { rippleKeyframe } from "./lib/animation-ripple.ts";

const rawCSS = `
:root, :host {
    --ripple: var(--color-gray-200)
}
`
export default defineConfig({
    preflights: [{ getCSS: () => `${tailwindPreflight}${rawCSS}${rippleKeyframe}` }],
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