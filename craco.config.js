// 需要安装craco包
// 添加配置可以通过webpack.config.js或者是本文件，本文件类似于vue.config.js
// 使用了craco里面配置的话需要修改package.json里面的启动方式
// "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   }
// 变成
// "scripts": {
//     "start": "craco start",
//     "build": "craco build",
//     "test": "craco test",
//     "eject": "react-scripts eject"
//   }

const path = require("path");
// antd 官网在cra中使用有说明使用
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  //less
  //webpack

  webpack: {
    // 配置别名
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,

      //   options: {
      //     lessLoaderOptions: {
      //       lessOptions: {
      //         modifyVars: { "@primary-color": "#1DA57A" },
      //         javascriptEnabled: true,
      //       },
      //     },
      //   },
    },
  ],
};
