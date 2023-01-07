const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPluginHashOutput = require('webpack-plugin-hash-output')

module.exports = {
    name: 'client',
    entry: [
        path.resolve(__dirname, 'src/pages/index.ts')
    ],
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/public/js'),
        filename: '[name].js',
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
                    configFile: 'tsconfig.json',
                },
            }
        ],
    },

    plugins: [
        new WebpackPluginHashOutput(),
        new htmlWebpackPlugin({
            hash: false,
            inject: true,
            optimization: { realContentHash: false },
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin()
    ],
}