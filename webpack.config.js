// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',

  devtool: 'source-map',

  // エントリーポイントの設定
  entry: [
    './src/js/app.js',
//    './src/scss/app.scss',
  ],
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },

      {
        test: /\.scss$/,
//        use: ExtractTextPlugin.extract({
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                // PostCSS側でもソースマップを有効にする
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  require('autoprefixer')()
                ],
                sourceMap: true
              }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                  outputStyle: 'compressed',
                  sourceMap: true
                }
            }
          ]
 //       })
      },

      {
          test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 8192,
                  name: './img/[name].[ext]'
              }
          }
      }
    ],

  }
};
