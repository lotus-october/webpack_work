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
  ],
  // 出力の設定
  output: {
    // 出力ファイル名
    filename: 'bundle.js',
    // 出力先パス
    path: path.join(__dirname, 'public/js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
      },

      {
        test: /\.scss$/,
//        use: ExtractTextPlugin.extract({
          // Sassファイルの読み込みとコンパイル
          use: [
            // linkタグに出力する機能
            'style-loader',
            // CSSをバンドルするための機能
            {
              loader: 'css-loader',
              options: {
                // CSS内のurl()メソッドの取り込みを禁止する
                url: false,
                // ソースマップの利用有無
                sourceMap: true,
                // 空白文字やコメントを削除する
                minimize: true,
                // Sass+PostCSSの場合は2を指定
                importLoaders: 2,
              },
            },
            // PostCSSのための設定
            {
              loader: 'postcss-loader',
              options: {
                // PostCSS側でもソースマップを有効にする
                sourceMap: true,
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  //require('autoprefixer')
                  require('autoprefixer')({
                    grid: true,
                    browsers: ['last 4 versions', 'Android 2.3'],
                    cascade : false,
                    remove  : false,
                  })
                ]
              },
            },
            // Sassをバンドルするための機能
            {
              loader: 'sass-loader',
              options: {
                // ソースマップの利用有無
                sourceMap: true,
              }
            }
          ],
 //       })
      },

      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader',
      },

      /*
      {
          test: /\.(jpe?g|png|gif|svg|ico)(\?.+)?$/,
          use: {
              //loader: 'url-loader',
              loader: 'file-loader',
              options: {
                  limit: 8192,
                  name: './img/[name].[ext]'
              }
          }
      }
      */
    ],

  }
};
