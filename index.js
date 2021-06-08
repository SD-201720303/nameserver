const express = require('express');

const PORT = 3002;
const HOST = '0.0.0.0';

const app = express();

app.get('/info', (req, res) => {
    res.json({
        "componente": "nameserver",
        "descrição": "serve os clientes com os serviços X, Y e Z",
        "versao": "0.1"
    });
})

app.listen(PORT, HOST);