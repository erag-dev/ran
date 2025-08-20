import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    base: "/ran",
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
            src: "/src",
            assets: "/src/assets/",
            stylesGeneral: "/src/sass",
            config: "/src/config",
            hooks: "/src/hooks",
            constGeneral: "/src/constants",
            components: "/src/components",
            pages: "/src/pages",
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
