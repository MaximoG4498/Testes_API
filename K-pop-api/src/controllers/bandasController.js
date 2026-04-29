const service = require('../services/bandasService');

// Função para listar todas as bandas
const getBandas = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(service.listarTodas()));
};

// Função para buscar uma banda por ID
const getBanda = (req, res, id) => {
  const banda = service.buscarPorId(id);
  if (!banda) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ erro: "Banda não encontrada" }));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(banda));
  }
};

// Função para criar uma nova banda
const postBanda = (req, res) => {
  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });
  req.on('end', () => {
    try {
      const nova = service.criarBanda(JSON.parse(body));
      if (!nova) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: "Dados inválidos" }));
      } else {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(nova));
      }
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ erro: "Dados inválidos" }));
    }
  });
};

// Função para deletar uma banda
const deleteBanda = (req, res, id) => {
  const banda = service.removerBanda(id);
  if (!banda) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ erro: "Banda não encontrada" }));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(banda));
  }
};

// Função para atualizar uma banda
const putBanda = (req, res, id) => {
  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });
  req.on('end', () => {
    try {
      const bandaAtualizada = service.atualizarBanda(id, JSON.parse(body));
      if (!bandaAtualizada) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: "Banda não encontrada ou dados inválidos" }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(bandaAtualizada));
      }
    } catch (e) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ erro: "Dados inválidos" }));
    }
  });
};

// Exporta todas as funções
module.exports = {
  getBandas,
  getBanda,
  postBanda,
  deleteBanda,
  putBanda
};