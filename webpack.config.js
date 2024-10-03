const path = require('path');

module.exports = {
    mode: 'production',
    entry: './theme.origin.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'theme.js',
    },
};