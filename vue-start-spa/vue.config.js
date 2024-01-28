const { defineConfig } = require('@vue/cli-service')



module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    module: {
      rules: [
        {
          test: /\.(pdf)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/pdf/',
                esModule: false,// Specify the output path for PDF files
              },
            },
          ],
        },
        // ...other rules
      ],
    },
  }

})
