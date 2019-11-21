var path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
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
        ],
    },
    devServer: {
        port: 8080,
        contentBase: ['./src', './public'], // both src and output dirs
        inline: true,
        hot: true
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery",
            pjax: "pjax/pjax"
        }
    }
};

// npm install css-loader style-loader --save-dev