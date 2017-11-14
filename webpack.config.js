module.exports = {    
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