const { resolve } = require('path');

const fonts = resolve(__dirname, '../', 'src', 'assets', 'fonts');
const icons = resolve(__dirname, '../', 'src', 'assets', 'icons');
const images = resolve(__dirname, '../', 'src', 'assets', 'images');

module.exports = {
    resolve: {
        alias: {
            node_modules: resolve(__dirname, '../node_modules'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            sourceMap: true,
                            localIdentName: '[local]--[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['svg-sprite-loader', 'svgo-loader'],
                include: icons,
            },
            {
                test: /\.svg$/,
                use: ['file-loader'],
                include: images,
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: ['file-loader'],
            },
        ],
    },
};