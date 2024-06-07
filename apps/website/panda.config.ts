import { defineConfig } from "@pandacss/dev";
import { uiPreset } from '../../packages/ui/panda.preset';

export default defineConfig({
  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],

  presets: [uiPreset],

  layers: {
    utilities: 'panda-utilities',
    recipes: 'panda-recipes',
    tokens: 'panda-tokens',
    base: 'panda-base',
    reset: 'panda-reset',
  },

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",
});
