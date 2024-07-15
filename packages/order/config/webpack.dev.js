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
        port: 8081,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        // static: './build'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'order',
            filename: 'remoteEntry.js',
            remotes: {
              container: 'container@http://localhost:8080/remoteEntry.js',
              shared: 'shared@http://localhost:8083/remoteEntry.js'
            },
            exposes: {
                './MarketingApp': './src/bootstrap',
                './MarketingApp1': './src/App',
                './Landing': "./src/components/Landing",
                './SomeComp': "./src/components/Jsjl",
                './Counter': './src/components/Counter.jsx',
                "./useStoreMarket": "./src/hooks/useStore",
                "./useStoreSelectorMarket": "./src/stores/useStoreSelector",
                "./StoreProviderMarket": "./src/hooks/StoreProvider",
                "./marketingStore": "./src/stores/index",
                './marketingSlice': "./src/stores/counterSlice"
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