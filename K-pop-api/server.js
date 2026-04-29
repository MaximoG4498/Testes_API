const http = require('http');
const url = require('url');
const controller = require('./src/controllers/bandasController');

  const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  const id = pathname.split('/')[2]; // Extrair o ID da URL

  if (pathname === '/bandas' && req.method === 'GET') {
    controller.getBandas(req, res);
  }
  else if (pathname.startsWith('/bandas/') && req.method === 'GET' && id) {
    controller.getBanda(req, res, id); // Passe o ID para o controller
  }
  else if (pathname === '/bandas' && req.method === 'POST') {
    controller.postBanda(req, res);
  }
  else if (pathname.startsWith('/bandas/') && req.method === 'PUT' && id) {
    controller.putBanda(req, res, id);
  }
  else if (pathname.startsWith('/bandas/') && req.method === 'DELETE' && id) {
    controller.deleteBanda(req, res, id);
  }
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

server.listen(3000, () => console.log("🎸 K-Pop Server ON na porta 3000")); // Notifica que o servidor esta aberto§