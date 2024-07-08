const path = require('path');

module.exports = {
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        // modules: [
        //     path.resolve(__dirname, "src"),
        //     path.resolve(__dirname, "node_modules")
        //   ],
        // modules: ['src', 'node_modules'],
    },
    module: {
        rules:[
            {
                test: /\.m?js$/,
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
    }
}