const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');
const path = require('path');

const domain = process.env.PRODUCTION_DOMAIN;


const prodconfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes:{
                './MarketingApp': './src/bootstrap',
                './MarketingApp1': './src/App',
                './Landing': "./src/components/Landing",
                './SomeComp': "./src/components/Jsjl"
            },
            shared: dependencies.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodconfig);