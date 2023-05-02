import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

import nodePolyfills from "vite-plugin-node-stdlib-browser";
// import inject from "@rollup/plugin-inject";
// import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), crx({ manifest })
    , nodePolyfills()
  ],
  // define: {
  //   global: {

  //     google: {}
  //   },
  // }, build: {
  //   rollupOptions: {
  //     plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
  //   },
  //   commonjsOptions: {
  //     transformMixedEsModules: true,
  //   },
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     plugins: [esbuildCommonjs(["@loopring-web/**"])],
  //   },
  // },
})
