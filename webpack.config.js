let webpack = require('webpack'); 
//let webpackDevServer = require('webpack-dev-sever');
let options = {    
    entry: './src/app.js',    
    output: {    
        path: __dirname,    
        filename: './bin/app.bundle.js',    
    },    
    module: {    
        loaders: [{    
            test: /\.js$/,    
            exclude: /node_modules/,    
            loader: 'babel-loader'    
        }]    
    }    
}    

let compiler = webpack([options]);
compiler.run(function() {

})
