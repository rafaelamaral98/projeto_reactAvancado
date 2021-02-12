const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require ('mysql2');
const ejs = require ('ejs');
const app = express();
const cors = require('cors');
const {inserirComentario, pegarComentario} = require('./mongoDB')

let conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'fseletro'
});

conexao.connect ((erro) =>{
    if (erro){
        console.log ('Falhou! ' + erro);
    }
    else {
        console.log ('Sucesso!');
    }
});

let sql = 'SELECT * FROM produtos;';
conexao.query (sql, (erro, resultado) => {
    console.log (resultado);
})

const porta = 5000;

app.set ('view engine', 'ejs');

app.use(bodyParser.json());

app.use(cors());

app.use((requisitar, resposta, next) => {
    resposta.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get ('/produtos', (requisitar, resposta) => {
    conexao.query (sql, (erro, resultado) => {
        resposta.send (resultado);
    })
})

app.post ('/compra', (requisitar, resposta) =>{
    let post = requisitar.body;
    let cliente = post.cliente;
    let produto = post.produto;
    let valor = post.valor_unitario;
    
    console.log (post.cliente);
    console.log (post.produto);
    console.log (post.valor_unitario);   
    
    conexao.query(sql);
})

app.get('/pegarMensagem', async (requisitar, resposta) => {
    const result = await pegarComentario()
    resposta.send(result)
    console.log (result)
});

app.post('/enviarMensagem', async (requisitar, resposta) => {
    let post = requisitar.body;

    var comentario = {
        nome: post.nome,
        email: post.email,
        msg: post.msg
    }

    const result = await inserirComentario(comentario)
    resposta.send(result)
})

app.listen (porta);