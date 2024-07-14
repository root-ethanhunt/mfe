const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');
const path = require('path');

const devConfig = {
    // entry: './src/index.js',
    mode: 'development',
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                shared: 'shared@http://localhost:8083/remoteEntry.js'
            },
            exposes: {
              "./useStore": "./src/hooks/useStore",
              "./useStoreSelector": "./src/stores/useStoreSelector",
              "./StoreProvider": "./src/hooks/StoreProvider",
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