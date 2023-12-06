import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [react()],
  esbuild: {
    jsxFactory: "h", // or your preferred JSX factory function
    jsxInject: `import 'react'`, // or the path to your React runtime
  },
});
