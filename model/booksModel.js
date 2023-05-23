/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize  = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');


/* IMPORTAÇÃO DA MODEL DE CATEGORY*/

const categories = require ('./categoriesModel')

/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA DE CATEGORIAS 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/
const books = connection.define(
    'tbl_books',
    {
        title_book:{
            type: sequelize.STRING,
            allowNull: false
        },
        value_book:{
            type: sequelize.STRING,
            allowNull: false},
        image_peq_book:{
            type: sequelize.STRING,
            allowNull: false},
        image_grd_book:{
            type: sequelize.STRING,
            allowNull: false},
        details_book:{
            type: sequelize.TEXT,
            allowNull: false}
    }
);

// A CHAVE PRIMARIA (1) DE MAKER VIRA UMA CHAVE ESTRANGEIRA (N) EM PRODUCT
categories.hasMany(books)

// A CHAVE ESTRANGEIRA (N) EM PRODUCT É A CHAVE PRIMARIA DE MAKER
books.belongsTo(categories)
// CRIAÇÃO DA TABELA
//books.sync({force:true});

module.exports = books;

