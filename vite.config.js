import { defineConfig } from "vite";
import { resolve } from "path"
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    build: {
        lib: {
            entry: {
                'object.groupby' : resolve(__dirname, 'src/index.ts'), 
                'polyfill' : resolve(__dirname, 'src/polyfill.ts'), 
            },
            name: 'objectGroupBy',
            // the proper extensions will be added
            fileName: '[name]',
        },
        rollupOptions: {
            plugins: [typescript({
                declarationDir: "dist",
                declaration: true
            })]
        },
        emptyOutDir: true
    }
})