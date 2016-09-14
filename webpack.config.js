const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ENV = require('./env.config.js')
const NODE_ENV = process.env.NODE_ENV
const debug = NODE_ENV !== 'production'
const CONFIG = require('./env.config.js')[NODE_ENV]

module.exports = {
    entry: {
        app: CONFIG.entry,
    },
    output: {
        path: CONFIG.buildPath,
        filename: debug ? "[name].js" : "[name]-[chunkhash].js",
        chunkFilename: debug ? "[name].js" : "[name]-[chunkhash].js",
        publicPath: CONFIG.sourceBasePath //最终发布的根路径，即网站根目录，异步加载的模块也是以这个为根目录
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css!sass?sourceMap')
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass?sourceMap')
            },
            { 
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000'
                // loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif)$/, 
                loader: 'url-loader?limit=819200'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    plugins: [
	    new HtmlWebpackPlugin({
	        template: CONFIG.template,
	        sourceBasePath: CONFIG.sourceBasePath, //网站根目录
	        inject: false, //自动插入入口文件到body下
	        env: CONFIG.env
	    }),
         
        new ExtractTextPlugin('style.css'),
    ],
    debug: debug,
    devtool: debug ? 'source-map' : '', 
    
    // 使用全局变量
    // externals: {
    //     'vue' : 'Vue',
    //     'fastclick' : 'FastClick',
    // },
    
    //自动补全扩展名
    // resolve: {  
    //     extensions: ['', '.vue', '.js'],
    //     alias: {
    //         'model': __dirname + '/src/service/model',
    //         'jsBridge': __dirname + `/src/js_bridge`,
    //         'api': __dirname + `/src/service/api/api.${NODE_ENV}.js`,
    //         'components': __dirname + '/src/components',
    //         'vux-components': 'vux/src/components',
    //         'actions': __dirname + '/src/vuex/actions',
    //     }
    // },
}

// 线上环境压缩js
if (debug) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {                                                   
                warnings: false
            }
        })
    )
}