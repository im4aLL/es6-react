module.exports = {
    entry: ['babel-polyfill', './assets_sources/js/main.js'],
    output: {
        path: './',
        filename: './assets/js/app.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
