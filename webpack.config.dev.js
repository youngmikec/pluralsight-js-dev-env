import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default{
    mode: "development",
    resolve:{
        extensions:['*', ".js", ".jsx", ".json"],
    },

    devtool: "inline-source-map" ,
    entry:[
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output:{
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true // When set to false shows all files being bundled.
        }),
        // // create HTML file that includes reference to bundle.js
        // new HtmlWebpackPlugin({
        //     template: "src/index.html",
        //     inject: true
        // })
    ],
    module:{
        rules:[
            {test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
}
