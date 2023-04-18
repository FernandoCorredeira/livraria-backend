const express = require('express');

const categoryModel = require('../model/categoryModel');
const category = require('../model/categoryModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/category/insert', (req,res)=>{

    let name_category = req.body.name_category;
    
    categoryModel.create(
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
    categoryModel.findAll()
    .then((category)=>{
        res.json(category)
    })
    

})

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/category/alter', (req,res)=>{

    let id = req.body.id;
    let name_category = req.body.name_category

    categoryModel.update(
        {name_category},
        {where:{id}}
    )
    .then(
        ()=>{
            res.send("Categoria alterada")
        }
    )

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/category/delete', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE DELETE!');

})

module.exports = router;