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
        extensions: ['', '.js', '.jsx']
        , root: path.resolve('src')
        , modulesDirectories: ['node_modules', 'src']
    }
    , externals: {
        react: 'React'
    }
    , module: {
        loaders: [{
            test: /\.jsx$/
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
