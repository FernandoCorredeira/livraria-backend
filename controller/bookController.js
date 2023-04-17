const express = require('express');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/book/insert', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/book/selec', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/book/alter', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/book/delete', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})
