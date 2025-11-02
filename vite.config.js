import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    base: "/ran/",
    build: {
        outDir: 'dist',
    },
    plugins: [
        {
            name: 'treat-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/))  return null
                // Use the exposed transform from vite, instead of directly
                // transforming with esbuild
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                })
            },
        },
        react(),
    ],
    server: {
        port: 8000,
        strictPort: true,
        host: true,
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, "./src"),
            assets: path.resolve(__dirname, "./src/assets/"),
            stylesGeneral: path.resolve(__dirname, "./src/sass"),
            config: path.resolve(__dirname, "./src/config"),
            hooks: path.resolve(__dirname, "./src/hooks"),
            constGeneral: path.resolve(__dirname, "./src/constants"),
            components: path.resolve(__dirname, "./src/components"),
            pages: path.resolve(__dirname, "./src/pages"),
        },
    },
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },
})
