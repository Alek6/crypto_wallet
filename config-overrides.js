const { alias } = require('react-app-rewire-alias');

module.exports = function ovveride(config) {
    alias({
        '@data': 'src/data',
        '@icons': 'src/icons',
        '@pages': 'src/pages',
        '@layouts': 'src/layouts',
        '@atoms': 'src/components/atoms',
        '@molecules': 'src/components/molecules',
        '@organisms': 'src/components/organisms',
    })(config);

    return config;
};
