"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var webpack_1 = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var clean_webpack_plugin_1 = require("clean-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var TerserPlugin = require("terser-webpack-plugin");
var autoprefixer = require("autoprefixer");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var WebpackBarPlugin = require('webpackbar');
var config = {
    entry: './src/index.tsx',
    target: 'web',
    devtool: 'inline-source-map',
    mode: (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        proxy: { '/graphql': 'http://localhost:1337' },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                            lessOptions: { javascriptEnabled: true },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [autoprefixer],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    plugins: [
        new WebpackBarPlugin({ fancy: true, profile: true }),
        new webpack_1.ProvidePlugin({
            process: 'process/browser',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new clean_webpack_plugin_1.CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
};
exports.default = config;
