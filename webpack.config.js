var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: './public',
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            //include: [PUBLIC_PATH, path.join(PUBLIC_PATH, 'src')],
            query: {
                presets: ["es2015", "react", "react-hmre"]
            }
        }]
    },
    resolve: {
        root: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')],
        extensions: ['', '.js'],
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        hot : true,
    }
}
