const express = require('express');

//IMPORTAÇÃO DA MODEL DE BOOK/
const booksModel = require('../model/booksModel')

/* GERENCIADOR DE ROTAS*/
const router = express.Router();



/* ROTA DE INSERÇÃO DE AUTOR(POST)*/
router.post('/books/insert', (req,res)=>{
    let{  title_book ,value_book , image_peq_book, image_grd_book, details_book, tblCategoryId} = req.body;
booksModel.create({
    title_book ,
    value_book ,
    image_peq_book,
    image_grd_book,
    details_book, 
    tblCategoryId
}).then(
    () => {
        return res.status(201).json({
            errorStatus: false,
            mensageStatus: 'Livro cadastrado com sucesso'
        
        })
}).catch(
    (error) =>{
        return res.status(500).json({
            errorStatus: true,
            mensageStatus: error
        })
    }
)
})

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/books/select', (req,res)=>{
    booksModel.findAll()
    
    .then((books)=>{
        res.json(books)
    }).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    );


})

router.get('/books/select/:id', (req,res)=>{
    
    let {id} = req.params

    booksModel.findByPk(id)
    .then((books)=>{
        res.json(books)
    }).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    );
})

router.get('/books/select/:title_book', (req,res)=>{
    
    let {title_book} = req.params

    booksModel.findOne({where:{titulo:title_book}})
    .then((books)=>{
        res.json(books)
    }).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                messageStatus: error
            })
        }
    );
})

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/books/alter', (req,res)=>{
    res.send('ROTA DE CATEGORIA DE ALTERAÇÃO!');

})

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/books/delete/:id', (req,res)=>{
    let id = req.params.id;

    booksModel.destroy(
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