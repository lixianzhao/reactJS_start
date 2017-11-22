const webpack = require('webpack'); 
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackDevServer = require('webpack-dev-server');
const argv = require('minimist')(process.argv.slice(2));
const options = {    
    entry: {
        'jsx': './src/jsx/app.js',
        'component': './src/componentType/app.js',
        'componentState': './src/componentType/app_stateful.js',
        },    
    output: {    
        path: path.resolve(__dirname, 'assets/js/'),    
        filename: '[name].bundle.js',    
    },    
    module: {    
        rules: [
            {    
                test: /\.js$/,    
                exclude: /node_modules/,    
                use :[{loader: 'babel-loader'}]
            },
            // {
            //     test: /.css$/,//This enables you to import './style.css' into the file that depends on that styling
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // }
        ]    
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),

    ]    
}    

const compiler = webpack([options]);
compiler.run(function(err, stats) {

})
// 开启webpack dev server
if (argv.env == 'local') {
    const server = new webpackDevServer(compiler, {
        hot: true,
        compress: true,
        publicPath: "/assets/js/",
        stats: {
            colors: true,
            chunks: false
        }
    });
    server.listen(80, '', function () {
        console.log('server start: http://localhost:80');
    });
}