var webpack = require('webpack')
var path = require('path')
//var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin


module.exports = {
    entry: {
        demo: './examples/demo.jsx'
    }
    , output: {
        path: path.resolve('examples')
        , filename: '[name].js'
        //, library: '[name]'
        //, libraryTarget: 'commonjs2'
    }
    , resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
        , root: path.resolve('src')
        , modulesDirectories: ['node_modules', 'src']
    }
    , externals: {
        react: 'React'
        , 'react-dom': 'ReactDOM'
    }
    , module: {
        loaders: [{
            test: [/\.jsx$/, /\.es6$/]
            , exclude: [path.resolve('node_modules')]
            , loader: 'babel'
            , query: {
                comments: false
                , sourceMaps: true
                //, modules: 'umd'
            }
        }]
    }
    //, watch: true
    , target: 'web'
    , plugins: [
        //new CommonsChunkPlugin('common.js')
    ]
}
