import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'
import path from "path";

const alias = {}
const defaultSrcPath = ['app', 'components', 'routes', 'screens', 'assets'];
defaultSrcPath.forEach(x => alias[x] = path.join(__dirname, `src/${x}`));

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { ...alias },
  },
  plugins: [react(
    {
      babel: {
        plugins: [
          'babel-plugin-macros'
        ]
      }
    },
  ),
    TanStackRouterVite()
  ],
})
