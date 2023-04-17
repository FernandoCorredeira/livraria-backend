const express = require('express');

const categoriaModel = require('../model/categoriaModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/category/insert', (req,res)=>{

    let name_category = req.body.name_category;
    
    categoriaModel.create(
        {name_category}
    ).then(
        ()=>{
            res.send('CATEGORIA INSERIDA')
        }   
    )

    //res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/category/select', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE SELEÇÃO!');

})

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/category/alter', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/category/delete', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.exports = router;