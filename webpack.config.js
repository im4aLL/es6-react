module.exports = {
    entry: ['babel-polyfill', './assets_sources/js/main.js'],
    output: {
        path: './',
        filename: './assets/js/app.js'
    },
    devServer: {
        inline: true,
        port: 3333,
        stats: {
            warnings: false
        }
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
//    externals: [{
//        'react': {
//            root: 'React',
//            commonjs2: 'react',
//            commonjs: 'react',
//            amd: 'react'
//        }
//    }, {
//        'react-dom': {
//            root: 'ReactDOM',
//            commonjs2: 'react-dom',
//            commonjs: 'react-dom',
//            amd: 'react-dom'
//        }
//    }],
    stats: {
        warnings: false
    }
};