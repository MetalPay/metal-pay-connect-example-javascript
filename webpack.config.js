// webpack.config.js
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/app.js',  // The entry point of your app
    output: {
        filename: 'bundle.js',  // The output bundle
        path: path.resolve(__dirname, 'dist'),  // Output directory
    },
    mode: 'development',  // Development mode for easier debugging
    plugins: [
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,  // Process JS files
                exclude: /node_modules/,  // Exclude node_modules
                use: {
                    loader: 'babel-loader',  // Transpile modern JS (optional)
                    options: {
                        presets: ['@babel/preset-env']  // Preset for ES6
                    }
                }
            }
        ]
    }
};
