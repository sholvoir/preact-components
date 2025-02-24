import { defineConfig, presetWind3, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
    presets: [presetAttributify(), presetIcons(), presetWind3()]
})