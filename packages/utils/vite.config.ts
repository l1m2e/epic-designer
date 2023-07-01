import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
export default defineConfig({
  plugins: [
    vue({
      script: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        defineModel: true,
      },
    }),
    UnoCSS(),
    dts({
      entryRoot: "./",
      outputDir: "dist",
    }),
  ],
  resolve: {
    dedupe: ["vue"],
  },
  // rollup打包配置
  build: {
    outDir: "dist", // 输出文件名称
    lib: {
      entry: {
        index: path.resolve(__dirname, "./index.ts"),
      }, // 指定组件编译入口文件
      name: "index",
    },
    // 库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    commonjsOptions: {
      esmExternals: true,
    },
  },
});