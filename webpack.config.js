﻿const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    name: 'client',
    entry: [
        path.resolve(__dirname, 'src/client/pages/index.ts')
    ],
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/public/client/pages'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.client.json',
                },
            },
        ],
    },

    plugins: [
        new htmlWebpackPlugin({
            chunks: ['manifest', 'vendor', 'app'],
            inject: true,
            optimization: { realContentHash: false },
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin()
    ],
}