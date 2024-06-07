import fs from 'node:fs';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import pandacss from '@pandacss/dev/postcss';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';
import fg from 'fast-glob'
import postcss from 'rollup-plugin-postcss'

// gets file names from a directory
// used to code split components
export const getFiles = (entry, extensions = [], excludeExtensions = []) => {
    let fileNames = [];
    const dirs = fs.readdirSync(entry);

    dirs.forEach((dir) => {
        const path = `${entry}/${dir}`;

        if (fs.lstatSync(path).isDirectory()) {
            fileNames = [
                ...fileNames,
                ...getFiles(path, extensions, excludeExtensions),
            ];

            return;
        }

        const matchesExcludeGlob = fg.sync(excludeExtensions).some((excludedPath) => path.includes(excludedPath));

        if (!matchesExcludeGlob && extensions.some((ext) => dir.endsWith(ext))) {
            fileNames.push(path);
        }
    });

    return fileNames;
};

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludedPaths = ['src/**/*.stories.*', 'src/**/*.test.*']

export default {
    input: [
        'src/index.ts',
        ...getFiles('./src/components', extensions, excludedPaths),
    ],
    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: false,
    },
    plugins: [
        peerDepsExternal(),
        postcss({
            extract: true,
            plugins: [
              pandacss({}),
            ]
        }),
        resolve(),
        commonjs(),
        typescript({ 
            tsconfig: './tsconfig.prod.json',
            declaration: true,
            declarationDir: 'dist',
        }),
        terser(),
        visualizer({ open: false }),
    ],
}

