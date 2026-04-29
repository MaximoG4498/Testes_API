module.exports = {
    validarBanda: (banda) => {
        return banda &&
               banda.nome &&
               banda.empresa &&
               banda.integrantes &&
               typeof banda.integrantes === 'number';
    }
};