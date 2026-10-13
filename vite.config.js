
import { defineConfig, loadEnv } from 'vite';
import { resolve, join } from 'node:path';
import { existsSync, cpSync, mkdirSync } from 'node:fs';

// ============================================
// Copy additional assets to dist
// ============================================

function copyExtraAssets() {
  let rootDir;
  let distDir;

  return {
    name: 'copy-extra-assets',
    apply: 'build',
    enforce: 'post',

    configResolved(config) {
      rootDir = config.root;
      distDir = resolve(config.root, config.build.outDir);
    },

    closeBundle() {
      mkdirSync(distDir, { recursive: true });

      const folders = ['asset', 'lang'];

      for (const folder of folders) {
        const source = join(rootDir, folder);
        const destination = join(distDir, folder);

        if (!existsSync(source)) {
          console.warn(`⚠️ ${folder}/ not found`);
          continue;
        }

        cpSync(source, destination, {
          recursive: true,
          force: true,
        });

        console.log(`✅ ${folder}/ copied to dist/`);
      }
    },
  };
}

// ============================================
// Vite Configuration
// ============================================

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  const apiTarget = env.VITE_API_PROXY_TARGET;

  return {
    root: '.',

    base: '/',

    publicDir: false,

    server: {
      port: 3000,
      open: true,

      // Laravel API proxy (development only)
      proxy: apiTarget
        ? {
            '/api': {
              target: apiTarget,
              changeOrigin: true,
              secure: false,
            },
          }
        : {},
    },

    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },

    plugins: [
      copyExtraAssets(),
    ],
  };
});
