let webpack = require('webpack'); 
//let webpackDevServer = require('webpack-dev-sever');
let options = {    
    entry: './src/app/demo.js',    
    output: {    
        path: __dirname,    
        filename: './dist/app.bundle.js',    
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
