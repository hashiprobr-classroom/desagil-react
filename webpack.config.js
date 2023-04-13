// NÃO É NECESSÁRIO ENTENDER OU MODIFICAR ESTE ARQUIVO.

const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: [
                '@hashiprobr/react-create-state-context',
            ],
        },
    }, argv);
    return config;
};
