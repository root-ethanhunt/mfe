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
        publicPath: '/shared/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shared',
            filename: 'remoteEntry.js',
            exposes: {
                './SharedApp': './src/bootstrap',
                './SharedApp1': './src/App',
                './Header': "./src/components/organisms/Header",
                './SubHeader': "./src/components/organisms/SubHeader",
                './SubHeader2': "./src/components/organisms/SubHeader2",
                './FullProducts': './src/components/organisms/FullProducts'
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