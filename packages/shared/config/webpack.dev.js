const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');
const path = require('path');

const devConfig = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        // contentBase: path.join(__dirname, 'build'),
        port: 8083,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        // static: './build'
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shared',
            filename: 'remoteEntry.js',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                container: 'container@http://localhost:8080/remoteEntry.js'
            },
            exposes: {
            './SharedApp': './src/bootstrap',
            './SharedApp1': './src/App',
            './Header': "./src/components/organisms/Header",
            './SubHeader': "./src/components/organisms/SubHeader",
            './SubHeader2': "./src/components/organisms/SubHeader2",
            './FullProducts': './src/components/organisms/FullProducts',
            './Organisms': "./src/components/organisms"
            },
            shared: {
                ...dependencies,
                react: {
                  singleton: true,
                  import: 'react',
                  shareScope: 'default',
                  requiredVersion: dependencies.react,
                },
                'react-dom': {
                  singleton: true,
                  requiredVersion: dependencies['react-dom'],
                },
              },
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);