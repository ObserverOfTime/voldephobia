import { defineConfig } from '@sovereignjs/core';

export default defineConfig({
  publicPath: process.env.CI ? 'voldephobia' : ''
});
