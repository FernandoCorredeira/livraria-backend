
// IMPORT DO PACOTE EXPRESS
const express = require('express');

// INSTANCIA EXECUTAVEL DO EXPRESS
const app = express();

// HABILITA A APLICAÇÃO A MANIPULAR JSON
app.use(express.json());

// HABILITA A APLICAÇÃO A MANIPULAR DADOS DE UM CORPO DE DADOS

app.use(express.urlencoded({extended:true}));

// IMPORTAÇÃO DAS ROTAS
const categoriesController = require('./controller/categoriesController');
const booksController = require ('./controller/booksController')

app.use('/', categoriesController);
app.use('/', booksController);

/* 
TESTE DE ROTA GET
PARAMETROS
1 - NOME DA ROTA
2 - CALLBACK QUE EXECUTA A AÇÃO DA ROTA
*/
// app.get('/testeGET', (req, res)=>{
//     res.send('Resposta da rota HTTP GET!');
// });

/* TESTE DE ROTA POST
PARAMETROS
1- NOME DA ROTA, 
2- CALLBACK DE EXECUÇÃO */
// app.post('/testePOST', (req, res)=>{
//     res.send('Resposta da rota HTTP POST!!!!');
// });

// /* TESTE DE ROTA PUT
// PARAMETROS
// 1- NOME DA ROTA, 
// 2- CALLBACK DE EXECUÇÃO */
// app.put('/testePUT', (req, res)=>{
//     res.send('Resposta da rota HTTP PUT!')
// });

// /* TESTE DE ROTA DELETE
// PARAMETROS
// 1- NOME DA ROTA, 
// 2- CALLBACK DE EXECUÇÃO */
// app.delete('/testeDelete', (req, res)=>{
//     res.send('Respota da rota HTTP DELETE!')
// });

/*
CRIAÇÃO DO SERVIDOR HTTP:
PARAMETROS:
1 - PORTA LÓGICA
2 - CALLBACK
*/

app.listen(3000, ()=>{
    console.log('Servidor rodando em - http://localhost:3000');
});