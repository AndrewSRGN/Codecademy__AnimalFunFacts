const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.js', // Your main file with .js or .jsx extension
    output: {
        path: path.resolve(__dirname), // Output path
        filename: 'app.compiled.js', // Name of the compiled bundle
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Process files with .js and .jsx extension
                exclude: /node_modules/, // Exclude the node_modules folder from processing
                use: {
                    loader: 'babel-loader', // Use babel-loader to process JS and JSX
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for compilation
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // File extensions that webpack will look for by default
    },
};
