const express = require('express');

const categoryModel = require('../model/categoryModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE CATEGORIA(POST)*/
router.post('/category/insert', (req,res)=>{

    let name_category = req.body.name_category;
    
    categoryModel.create(
        {name_category}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus:'Categoria inserida com sucesso'
            })
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    );


    //res.send('ROTA DE CATEGORIA DE INSERÇÃO!');

})

/* ROTA DE SELEÇÃO DE CATEGORIA(GET)*/
router.get('/category/select', (req,res)=>{
    categoryModel.findAll()
    
    .then((category)=>{
        res.json(category)
    }).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    );

    

})

/* ROTA DE ALTERAÇÃO DE CATEGORIA(PUT)*/
router.put('/category/alter', (req,res)=>{

    let id = req.body.id;
    let name_category = req.body.name_category

    categoryModel.update(
        {name_category},
        {where:{id}}
    )
    .then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'Categoria alterada com sucesso'
            })
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    );


})

/* ROTA DE EXCLUSÃO DE CATEGORIA(DELETE)*/
router.delete('/category/delete/:id', (req,res)=>{
    let id = req.params.id;

    categoryModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'Categoria excluida com sucesso'
            })
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    );

    


})

module.exports = router;