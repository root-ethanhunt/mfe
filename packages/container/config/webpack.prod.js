const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const { dependencies } = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;


const prodconfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: dependencies.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodconfig);