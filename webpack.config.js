const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                      // Adds CSS to the DOM by injecting a `<style>` tag
                      loader: 'style-loader'
                    },
                    {
                      // Interprets `@import` and `url()` like `import/require()` and will resolve them
                      loader: 'css-loader'
                    },
                    {
                      // Loader for webpack to process CSS with PostCSS
                      loader: 'postcss-loader',
                      options: {
                        postcssOptions: {
                          plugins: [
                            autoprefixer
                          ]
                        }
                      }
                    },
                    {
                      // Loads a SASS/SCSS file and compiles it to CSS
                      loader: 'sass-loader'
                    }
                  ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: './src/index.html'
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
    },
};