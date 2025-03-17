import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      '@slices': path.resolve(__dirname, 'src/redux/slices'),
      '@store': path.resolve(__dirname, 'src/redux/store'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@icons': path.resolve(__dirname, 'src/components/icons'),
      '@cpt': path.resolve(__dirname, 'src/components'),
      '@ctx': path.resolve(__dirname, 'src/Context'),
    },
  },
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
//   resolve: {
//     alias: {
//       '@slices': path.resolve(__dirname, 'src/redux/slices'),
//       '@store': path.resolve(__dirname, 'src/redux/store'),
//       '@pages': path.resolve(__dirname, 'src/components/pages'),
//       '@cpt': path.resolve(__dirname, 'src/components'),
//       '@ctx': path.resolve(__dirname, 'src/Context'),
//     },
//   },
// });
