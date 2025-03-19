/*const { Client } = require('pg');

// Configuração do cliente PostgreSQL
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'personalpage',
    password: '123',
});

// Conecta ao banco de dados
client.connect()
    .then(() => console.log('Conectado ao banco de dados PostgreSQL com sucesso!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err.stack));

module.exports = client;*/

const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL, 
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

// Conecta ao banco de dados
client.connect()
    .then(() => console.log('Conectado ao banco de dados PostgreSQL com sucesso!'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err.stack));

module.exports = client;
