const { alias } = require('react-app-rewire-alias');

module.exports = function ovveride(config) {
    alias({
        '@icons': 'src/icons',
        '@pages': 'src/pages',
        '@layout': 'src/layout',
        '@atoms': 'src/components/atoms',
        '@molecules': 'src/components/molecules',
        '@organism': 'src/components/organism',
    })(config);

    return config;
};