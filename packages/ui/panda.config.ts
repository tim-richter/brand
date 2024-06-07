import { defineConfig } from '@pandacss/dev';
import { uiPreset } from 'panda.preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',

  // reset panda
  presets: [uiPreset],

  // The output directory for your css system
  outdir: 'styled-system',

  layers: {
    utilities: 'panda-utilities',
    recipes: 'panda-recipes',
    tokens: 'panda-tokens',
    base: 'panda-base',
    reset: 'panda-reset',
  },
});
