const http = require('http');
const https = require('https');
const server = http.createServer((req, res) => {
const apiUrl = 'https://dog.ceo/api/breeds/image/random'; https.get(apiUrl, (apiRes) => {
let data = '';
apiRes.on('data', (chunk) => {
data += chunk;
});
apiRes.on('end', () => {
res.writeHead(200, {'Content-Type': 'application/json'}); res.end(data);
});
}).on('error', (err) => {
console.log('Erro para acessar a API:', err.message); res.writeHead(500, {'Content-Type': 'text/plain'}); res.end('Erro para acessar a API');
});
});
// Iniciando o servidor na porta 8080
server.listen(8080, () => {
console.log('Servidor Node.js rodando em http://localhost:8080/')});
