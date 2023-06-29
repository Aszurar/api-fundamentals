import http from 'node:http';

const games = [];

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === 'GET' && url === '/games') {
    console.log('Método GET!');
    console.log('Listagem de jogos!');

    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(games));
  }

  if (method === 'POST' && url === '/games') {
    console.log('Método POST!');
    console.log('Criação de jogo!');

    games.push({
      id: 1,
      name: 'Final Fantasy XV',
      description: 'Action RPG',
    });

    return res.writeHead(201).end('Criação de jogo!');
  }

  return res.writeHead(404).end('Requisição não encontrada!');
});

server.listen(3333);
