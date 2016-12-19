let path = require('path');

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {},
    module: {
        loaders: [
            {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.(scss|sass)$/, loader: 'style!css!sass'},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
            // {
            //     test: /\.scss$/,
            //     /* order from bottom to top, so first sass, autoprefix, css and finally style */
            //     loaders: ['style', 'css', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded']
            // },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     loaders: ['url?limit=8192', 'img']
            // }
        ]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            inject: 'body',
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, './src/client')) === -1;
            }
        })
    ]
};