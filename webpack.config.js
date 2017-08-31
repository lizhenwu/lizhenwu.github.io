const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    devtool: "inline-source-map",//sourcemap错误映射，仅可用于开发环境
    devServer:{
        contentBase:"./build",
        clientLogLevel: "none"
    },
    resolve:{
        alias:{
            jquery: './src/js/jquery.js'
        }
    },
    module:{
        rules:[
            {
                test: /\.(less)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                    use: [ { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader',"less-loader"]
                })
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//启用HMR
        new cleanWebpackPlugin(['build']),
        new ExtractTextPlugin({
            filename: "[name].[contenthash].css"}),
        new htmlWebpackPlugin({
            title:'windmill_',
            template:'./index.html',
            favicon:'./favicon.ico'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        })
    ]
}