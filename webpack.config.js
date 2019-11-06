const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
module.exports = {
    entry: [
        './app/app.ts',
        './assets/src/js/scripts.ts'
    ],
    devtool: 'inline-source-map',
    output: {
        path: `${__dirname}/assets/dist`,
        filename: 'bundle.js'
    },
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, '')
    },
    watch: false,
    watchOptions: {
        ignored: /node_modules/
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss|css)(\?|$)/,
                use: [
                   MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ],
            },
            {
                test: /\.(png|gif|jp?g)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: "file-loader"
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'bundle.css',
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['./'] }
          })
    ],
}