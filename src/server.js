import http from 'node:http';

const games = [];

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === 'GET' && url === '/games') {
    console.log('Método GET!');
    console.log('Listagem de jogos!');

    res.setHeader('Content-Type', 'application/json');

    return res.end(JSON.stringify(games));
  }

  if (method === 'POST' && url === '/games') {
    console.log('Método POST!');
    console.log('Criação de jogo!');

    games.push({
      id: 1,
      name: 'Final Fantasy XV',
      description: 'Action RPG',
    });

    res.end('Criação de jogo!');
  }

  console.log('Deu bom!');
});

server.listen(3333);
