const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/theme.src.js',
    externals: {
        jquery: "jQuery"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'theme.js',
    },
    module: {
        rules: [
            {
                test: require.resolve("./src/theme.src.js"),
                use: "imports-loader?this=>window"
            }
        ]
    }
};