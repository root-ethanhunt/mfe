const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { dependencies } = require('../package.json');

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
    // new ModuleFederationPlugin({
    //     name: 'shared',
    //     filename: 'remoteEntry.js',
    //     exposes: {
    //         './SharedApp': './src/bootstrap',
    //         './SharedApp1': './src/App',
    //         './Header': "./src/components/organisms/Header",
    //         './SubHeader': "./src/components/organisms/SubHeader",
    //         './SubHeader2': "./src/components/organisms/SubHeader2",
    //         './FullProducts': './src/components/organisms/FullProducts'
    //     },
    //     shared: {
    //         ...dependencies,
    //         react: {
    //           singleton: true,
    //           import: 'react',
    //           shareScope: 'default',
    //           requiredVersion: dependencies.react,
    //         },
    //         'react-dom': {
    //           singleton: true,
    //           requiredVersion: dependencies['react-dom'],
    //         },
    //       },
    // }),
]
}