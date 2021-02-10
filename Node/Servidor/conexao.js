const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require ('mysql2');
const ejs = require ('ejs');
const app = express();
const cors = require('cors');

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

app.get('/pegarMensagem',(requisitar, resposta) => {
    let sql = "SELECT nome, msg FROM comentarios JOIN clientes ON clientes.id_cliente = comentarios.id_cliente LIMIT 5;";
    conexao.query(sql, (erro, resultado) =>{
        resposta.send(resultado);
    });
});

app.post('/enviarMensagem', (requisitar, resposta) => {
    let post = requisitar.body;
    let nome = post.nome;
    let email = post.email;
    let msg = post.msg;

    let comando1 = `INSERT INTO clientes (nome,email) VALUES ('${nome}','${email}');`
    let comando2 = `SELECT id_cliente FROM clientes WHERE email = '${email}';`
    

    conexao.query(`INSERT INTO clientes (nome,email) VALUES (?,?);`,[nome, email]);
    conexao.query(comando2, (erro, resultado) => {
        let comando3 = `INSERT INTO comentarios (id_cliente,msg) VALUES ('${resultado[0].id_cliente}','${msg}');`
        conexao.query(comando3);
    })
})

app.listen (porta);