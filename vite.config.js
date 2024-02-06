// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     css: {
//         postcss: './postcss.config.js',
//     },
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
    plugins: [
        react(),
        qrcode()
    ],
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },
});

// vite.config.js