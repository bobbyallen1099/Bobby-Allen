const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        progress: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/views/pages/index.pug",
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['html-loader?attrs=false', 'pug-html-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ],
            },
        ],
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery",
            pjax: "pjax/pjax"
        }
    }
};
