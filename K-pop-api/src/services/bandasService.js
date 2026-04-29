let bandas = require('../data/mock.json');
const listarTodas = () => bandas;
const buscarPorId = (id) => bandas.find(b => b.id === parseInt(id));
const criarBanda = (dados) => {
const novaBanda = { id: bandas.length + 1, ...dados };
bandas.push(novaBanda);
return novaBanda;
};
const removerBanda = (id) => {
const index = bandas.findIndex(b => b.id === parseInt(id));
if (index !== -1) return bandas.splice(index, 1)[0];
return null;
};
module.exports = { listarTodas, buscarPorId, criarBanda, removerBanda };