const { getDefaultConfig } = require('expo/metro-config');

process.env.EXPO_ROUTER_APP_ROOT = 'src/app';

const config = getDefaultConfig(__dirname);

module.exports = config;