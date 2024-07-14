const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');
const path = require('path');

const domain = process.env.PRODUCTION_DOMAIN;


const prodconfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/marketing/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            remotes: {
              container: `container@${domain}/container/latest/remoteEntry.js`,
              shared: `shared@${domain}/shared/latest/remoteEntry.js`
            },
            exposes:{
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
        })
    ]
}

module.exports = merge(commonConfig, prodconfig);