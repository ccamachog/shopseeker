var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var pkg = require('./package.json');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var stylelint = require('stylelint');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')

};
process.env.BABEL_ENV = TARGET;
var common = {
    entry: PATHS.app,

    /* add resolve.extensions */
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.css$/,
                loaders: ['postcss'],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: PATHS.app
            }
        ],
        loaders: [
            /* set up jsx */
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.app
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [

        new HtmlwebpackPlugin({
            title: 'Custom template'
            //template: PATHS.app+'/main_template.html' // Load a custom template
            //inject: 'body' // Inject all scripts into the body
        })

    ]
};
if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        output: {
            path: PATHS.build,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: PATHS.app
                }


            ]
        },
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // display only errors to reduce the amount of output
            stats: 'errors-only',

            // parse host and port from env so this is easy
            // to customize
            host: process.env.HOST,
            port: 5006//process.env.PORT
        },
        plugins: [
            /*new webpack.ProvidePlugin({
             $: "jquery",
             jQuery: "jquery"
             }),*/
            new webpack.DefinePlugin({
                // This affects react lib size
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
if (TARGET === 'build' || TARGET === 'stats') {
    module.exports = merge(common, {
        entry: {
            app: PATHS.app,
            vendor: Object.keys(pkg.dependencies)
        },
        output: {
            path: PATHS.build,
            filename: '[name].[chunkhash].js'
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css'),
                    include: PATHS.app
                }
            ]
        },
        plugins: [
            new Clean(['build']),
            new ExtractTextPlugin('styles.[chunkhash].css'),
            /* important! */
            new webpack.optimize.CommonsChunkPlugin(
                'vendor',
                '[name].[chunkhash].js'
            ),
            new webpack.DefinePlugin({
                // This affects react lib size
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}