const express = require('express');

const categoriesModel = require('../model/categoriesModel');

/* GERENCIADOR DE ROTAS*/
const router = express.Router();

/* ROTA DE INSERÇÃO DE CATEGORIA(POST)*/
router.post('/categories/insert', (req,res)=>{

    let name_category = req.body.name_category;
    
    categoriesModel.create(
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
router.get('/categories/select', (req,res)=>{
    categoriesModel.findAll()
    
    .then((categories)=>{
        res.json(categories)
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
router.put('/categories/alter', (req,res)=>{

    let id = req.body.id;
    let name_category = req.body.name_category

    categoriesModel.update(
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
router.delete('/categories/delete/:id', (req,res)=>{
    let id = req.params.id;

    categoriesModel.destroy(
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