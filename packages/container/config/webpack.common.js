const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        modules: ['src', 'node_modules'],
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-react", {"runtime": "automatic"}],'@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html'
    }),
]
}