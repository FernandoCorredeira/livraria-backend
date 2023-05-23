const express = require('express');


/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/author/insert', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/author/selec', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/author/alter', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/author/delete', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.export = router;
