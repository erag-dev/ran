import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    // base: "./",
    base: "/ran/",
    build: {
        outDir: 'dist',
    },
    plugins: [
        react(),
        {
            name: 'js-as-jsx',
            enforce: 'pre', // make sure it runs before other transforms
            async transform(code, id) {
                if (!id.endsWith('.js') || !id.includes('/src/')) return null
                    const result = await transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                    sourcemap: true,
                })
                return {
                    code: result.code,
                    map: result.map,
                }
            },
        },
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
