import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
const svgLoader = require("vite-plugin-react-svg");
const path = require("path");
require("dotenv-flow").config();

const cwd = path.resolve(process.cwd(), "../");
const host = process.env.VITE_SERVER_DOMAIN.replace(/https?:\/\//, "");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({
      loose: true,
    }),
    react(),
    svgLoader(),
  ],
  define: {
    "process.env.MONO": process.env.MONO,
  },
  resolve: {
    alias: {
      "extra-graphs": `${cwd}/frontend/src/extra-graphs`,
    },
  },
  server: {
    host,
    port: 3100,
  },
});
